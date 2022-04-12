import { json } from "stream/consumers";

export default function getAviaTickets() {
    const url: string =
        "http://map.aviasales.ru/supported_directions.json?origin_iata=LED&one_way=false&locale=ru";

    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open("GET", url);
        xhr.addEventListener("load", () => {
            if (xhr.status >= 200 && xhr.status < 400) {
                resolve(JSON.parse(xhr.responseText));
            } else {
                reject(`Oops! We've got a error: ${xhr.statusText}`);
            }
        });
        xhr.send();
    })
    .catch()
    .then((response: { origin: object; directions: unknown[] }) => {
        // Getting an object which returns origin and directions of ticket
        let arrayOfDirections: unknown[] = response.directions;
        // We interesed in directions
        arrayOfDirections.forEach(
            // Getting only one way tickets for quick requests
            (direction: {
                direct: boolean;
                iata: string;
                name: string;
                country: string;
                country_name: string;
            }) => {
                if (direction.direct === true) {
                    console.log(direction);
                }
            }
        );
    });

}

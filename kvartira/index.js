let datas;

fetch("data.json")
  .then((data) => data.json())
  .then((data) => {
    console.log(data);
    datas = data;

    const box = document.querySelector(".box");
    datas.map((item) => {
      box.innerHTML += `<div id=${item.id}><p>${item.room_number}</p></div>`;
    });
  })
  .catch((error) => {
    console.error("There was a problem with the fetch operation:", error);
  });

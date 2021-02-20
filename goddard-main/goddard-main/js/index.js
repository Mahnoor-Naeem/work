const txts = document.querySelector(".animated-text").children,
        txtsLen = txts.length;
      // console.log(txts);
      let index = 0;
      const textInTimer = 3000,
        textOutTimer = 2800;

      function animatedText() {
        // console.log(txts[index])
        for (let i = 0; i < txtsLen; i++) {
          txts[i].classList.remove("text-in", "text-out");
        }

        txts[index].classList.add("text-in");

        setTimeout(function () {
          txts[index].classList.add("text-out");
        }, textOutTimer);

        setTimeout(function () {
          if (index == txtsLen - 1) {
            index = 0;
          } else {
            index++;
          }

          animatedText();
        },textInTimer);

       
      }

      window, (onload = animatedText);
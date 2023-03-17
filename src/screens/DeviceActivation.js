import React from "react";
import { View, Text, Image } from "react-native";
import { Button, Title, TextInput, Paragraph } from "react-native-paper";

const DeviceActivation = ({ navigation }) => {
  const [activation, onChangeActivation] = React.useState("");

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <View style={{ width: "80%", alignSelf: "center" }}>
        <Image
          style={{
            width: 100,
            height: 100,
            resizeMode: "contain",
            alignSelf: "center",
            marginBottom: 20,
          }}
          source={{
            uri: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxQUExYUFBQWFxQYGBkbGRcZGRkgGxYeHBkYGRkZGRgZHiohGRsoIBgYIjMiJistMDAwGCA1OjUvOSovMC0BCgoKDw4PHBERHC8mHyYxLzMvNy0vMS8xMi83LS83MDQvLy8vLy0tNy8xLy8tLy8vLzIvLy84Ly8vLy8tLy8vL//AABEIANAA8wMBIgACEQEDEQH/xAAcAAAABwEBAAAAAAAAAAAAAAAAAQIDBAUGBwj/xABDEAACAQIEBAQDBwIEBAQHAAABAhEAAwQSITEFIkFhBhNRcTKBoQcUI0JSYpGCwTNykrFDotHwCBVjwhYkc6Oys+H/xAAaAQEAAwEBAQAAAAAAAAAAAAAAAQIDBAUG/8QAMREAAgIBBAAEAwcEAwAAAAAAAAECEQMEEiExBUFRcRMiYRQyUoGRofBCscHhFSPR/9oADAMBAAIRAxEAPwDtTuGEDeitnLvQNvLrvQjP2igElDObpM0q42YQKLzPy/KaMrk136UAdtgog70hUIMnajCZ9dqHmTy0Ad3m26UaOAIO9EeTvNAW83NQCbalTJ2o7gzaigHzabUC2TTegFZhGXrEUm2Mu9H5f5vnH1ogc+m0UAVxCxkbUt3DCBvTb3sgMxA1JJiPemrGJtNJt3EcjcKymJ01g6UJofTl360koSc3Tesn4s8dWsNmRVNy8pUFdQi5oY5ng6hdYE9NqruF/ajaaEvWip/VbOcR6lSFYfIGs3linTZ0R0maUd6i6OgXGzCBvQttlEHeqvgfG7OJQvYZnUNlJZHUTuQM6iY6xtUs4y0zZTdQPtkzLm/iZq9nO4tOmuR8IQc3TelXObbpReZPL8qM8neakgNHAEHekW0KmTtShbzc1EHzabUALgzbUrMIy9Yikk5NN5o/L/N84+tAFbGXU0VxCxkbUc59NqBfLpvQCncEQN6K3y79aBt5eagOftFAJZCTI2pdxswgb0nzI5flQK5Nd+lAI8hqKnPvPahQBITPNMd6O5+36UbXM2goKcm/X0oAACOmaPnNFbn823eh5eubpvQZs2g99aAK5M8u3alsBGkT9aJXy6H6UQtwc3SgBb/d8pomJnSY7bUbc+3T1oxcjlO9AHciOXftRW/3b96JUy6n6UGXPqPrQCZM9cs/KP8ApVV4l8RWMHbz3WAJnKgIz3I6KJ29SYA6mrfPpl67f2rkH2vcTts4w9sIbgKm4wUZmYEZLZaJyqDJ6Syj1FUyS2qzfTYviZFHy8yj8QeJ72MZnZQ1pZKqzRaSNoB/xG/cflA0qV4OuMbmEdRluteQSIGZCZuCBuuQMYPp2rNriDHNzPGgaAgnbIg1c/L+K1f2bY+xZuJcukqvluquQSqOWGaYnLIBAO2461wx5mm/U+jyRWPDKMFxT4N7xz7P8LiLj3Zuq9zVirgiYA0VlYDQdK5Jj7Rt3btrMrNbd0LrOsGNADrtPaCOk10Pxn45TyvKwlwM7znuCR5agbCQDnbUAjoGO8VzCAI000MdtinoNCCR0Air6hwbpdnP4ZHKotzbryTOp+B8fdfhd9VnPZF5LZAiD5YuWwAeoNyB7Cub8TuBRZFtFKvuWjK0idWOs9ZrffZ1xvDYbCsl28ouNdd2BkkEBbeuUGCfLBA9CKwfiC5b80G2vIbt1rauDAtkkiV3UaiNJAPapycxjyTpE1lycUm+/wAzR+FPHb4VvLxAfyTtJzG33tufiX1Tf9Poeu8PxaXUW4rh7bCVYHQjsa814+6ShVJydVMMF0nkf21iu1fZvxi1iMP5aKiPb+NUVVDZtrgVQACYObQcwPar6eb+6zj8S00V88F7mwcmdJjttS3Ajlie1ELmXlO9EqZdTXUeQHb/AHfWkyZ65Z+Uf9KNhn1H1o/M0y9dv7UALn7d+1GgEc0T3pKjJqfpQZM2o+tAEhM6zHfajuft+cUZuZuUb0F5N+vpQBqBGsT9aRbmebbvRm3JzdN6NnzaD60AuF7UKa+7n1FCgFugUSN6K2M2/Sk21IMnaju6/DQBFzOXptSnXLqPagGER1j60SCDzbUAaJm1NJW4Scp2oXASZXalswIgb0AVzk260aoCMx3pk3lT/EZVnbMRr6xRzm5l1UwQRsR60ApHzaGjdsugo3YEQu9C2Y+LegCKaZusTXnzxi1pcZdS2oUB4mSWdl5SzMxJZjda4xJP5RXesfihat3LrfBbVnJ/aoLH6CvNdnNdYPeXW4z3GJ6gAkx1AJM1zah8JHqeFRe9tFniLauIHV0tqQei/FBH9X8UxbDLPl3CiEXGgwQqg6EdyaYsYJfLB1DZEiCdGuEj19IqRc4Vo/l5ywKqiAzmKgEaHcb6bCK5F6H0Dbrc1+45hncqzOV8wMs9hlEb+maafYtB5l5TA2ggkgk/yP8ATTRwN22lq64zJezOrNucmVG9BzErl6RBpUxAKg5B6/FImO7RmNUkqZbFNSjaZFsG6shHVbZukExqpnQekHT+aJ7BeS7Fny3I1gKynULHqPpTIwzF2tJmzNqVmcygMXidyApIO9Sb/D1XOQzmAtwHMdRsduw331q31M1za9PqOYlkCGIylVuAeojK4Hy/3rYfY81o3bhyr5qrKuCZIByXAYPMp/CaD113rDXuHoHCwcucrqTsyZl+tW32dcRNjH4ZiMtu6TZY6QSQVHsSwSfatcNKSObXqUsck15eR6BVAwk70hHzaHag6kmRtSnYEQu9egfLBOcugpWQRm6xP96K2Y+Ko/3hc8Z1nN8OYTsGjLM7MpjuKAfQ5tDRO+XQbUq4Z+GgjACG3oA2QAZhvRW+ffpSUUgydqO7r8NAEbhBy9KU65dRRqwAg70i2CDLbUAX3g9qFPeYvahQDfmZtIihOTvNKuKAJG9FbE/FQA8v8094os2fTbrRFjMdJ+lKuCBy70BHx2LFm2zMCwUTA3PooHUkwB71nL+JuBDfvpdUb5Q5CpJ+H8Ikk6/EQZP6QaXxHF+ZdYlXfIcttUyyWHxsAeskpmIhcp1Emq9b5vYlbZEJaUOyl2uEOSQoLsYkQxIXQEDUxpnJkjq4S7fYE22CjI584guVIuAIcumUAZcpOvmFmnUMrhhvYcqCGa4wCC2G/BaAYCloNpj+ogg7CdI0OFxQ2nqw/wBLR/0qC/h2wcQ2IzP5jLlYFpUjTQBgSuw2IjpFQmC6tKVAYjWNVnY+k9aXlz67VWnEva/xJuWh+cRmHpnXTN7rqZ+HqZy3gQGQyrCQR1rROyCB4jxwtYa8xUHJbeAdiQOUQfVorgWITmdR+S0loe7kA12H7T8UEwqJ1u3UzH0VAbrE9pRR/VXIraP5mRVL3XdmyKJYsBlVAPUGf9Brj1DuVI97wtKONyfm/wBkg2uAMv6fMJP+W0sf7iukfZ54PuWz5+JADnP5duZyZ5l2/cVOUDoCZ1MCu8I+ALhNq9iQU8va0Yl9Q0vB5QW3XcgCYkiuquoAkb1fBhr5pGXiGv3fJjfHmc0+11Ut2sLaUABWdlA0CrbRViP0w40HaucWADIy9cplo12H0gf1Vt/tWxXmYpLeh8q1sTGr5i0dwFtn51jGwrIBcIGRy4GYfmQKzCR1PmqJ9VPpWOd3J0d/h62YY353/kufBGItJxCw1wDWUUkzkNwZAe7ZhkP+eelWXjLwjcwtzzEg4Uhl3g2s5AVCOq5tFI6EA7ScmEzHLqOUwQIKssHQ/qHrXauAY+1xHCMtzVyuS8swQY0ZY2B+JT/cGJxJSjtffkZ62U8GRZo/dfDOKZ5QN1yI3ztNDfQ1aeF7y28SuYAqmIQwRIy3eQmD0Gcn5VYeIPBV/DMMiPfsgsS6rqFac4ZBqOjSND9KzFhwXUT/AIltrZI/Uvwme41FU2uD5OpZcefH8r7Vfqeks+Xlie/1oeXl13qHwDGDEYe1dO721Y9iRqPkZHyppuJFmNtF8xhvJAVSPU7mP2g66GK9Gz5Jpp0yBx7FXHPlFXRH0V7TKXeNTvHlAaSSCNQNyJqG4VfVWvFEcjOSms3FCAKGkCWOUjYQWBGgKm64n4ft4hMt92JJBbLAmNgJBKqNdJ6yZOtWCZbaKikmAFEkk+mpOpPeqNgoMNeZna1GIF5AJJuGSOjDKfLyaHuYMqdauOEYx7he3dUrctxqQsXFMw4ykidCCPX0mBReJL2VFxKRmttvB1ts2VgIIOohtD+UUt8RMMqurRNq4LgdCf23GgwToUaJ1EGoUga7Pm5YjvQ+DvNNYW+r21uLpImOoOzAj1BkH2p63r8VakA8ueae8UWfPpt1omYgwNqW4AErvQCfu3f6UKR5jd/4oUApEKmTtR3Bm26UFuZtDQY5NuvrQCg4jL12pNtcpk+1H5embrvRK2fQ++lAZHgl+4UOUW1+I3jdDcp1LZhI13OUkAKRrqBTWFtZcXd0aDaskE6ZhmuiQv5B0CwNAD1q4vWwmIcN8LFLgnYmFtifUhkn+pab4pBuWrg2YPb9z8QPtyP/AKqxfmWJAwavJBKsYnaGIEAkHrGkiDpHQVGwtq7nKlrfmAmEIdc6g6MrEvOkTA0PyJdsXo96msiXVhh7dCD6gjUHuKiLQIGM4jOW0balmYK1u4Y30VhAbMC0QQNO0GLThdk2reV4zFnbQkgZnZok6mJietRUuNaYC4cykwlwgSpOgV49dgwjoDqZNmq5tT9K1iipmvEPhlsViLFx2Aw9oMzJrmuFmU5T0CwizvIJHepvBvDeHw+tq2DdM5rzwbryZMvGgJ1gQO1XHma5em39qDDLqOvrTars0eWbSjfCDVgog71A4jxOzh8rXrqWwxhczRmMdB1ihj+IIpVfjuv8FpSJIG7GfhQdWPYCSQDxzxvxm9jrysLa20si6qD4iTmWcxnLqUGw26maic9qMJZsWNp5ZUi78ZjC4vF2rVp7eW66tfvKwOYlciqbgMDLaR+XaXXT1HjCxYGBwyYW9aui3cyuyOhLZwS7wp+IsJ7fKjv+B7RwT3kvO5e15tpYQIx8vPkKhdRIPf8AisVhsE+hzqIXNmAGbXcSZ0rmnuSdpcnoz8Q0mDY3NpL6d/yy0HCzbuWne7mD2EvAxCxcWCsSYIjfrNSOGY84a6Llm4pcTyE6XEJko39j0PzBtOBeBHe1hcUrWnLFWa3ctSpVhuYYZ+hg+/StZwriWDuXXwjYa2l5WaUZLZR2X4jbYDm0g6gNB20MQsDu7r0Oyfi2JQUGtyfrxf8As0PBuL28TZW5bMqwjXdSNGVvQggiqXivgXB3X8xrQR+bW1C5mYEZ2EQXBIYNvIEyNK0tqwqKMoAAGigAAdgBsKUvPv09K7KtcnkKbjK4NopPCfB7uGsCy7q+V3ysJEqzFxKn4SCxESdhrTPnfd7gDC3DlybhY5iuYkaFd5deUHUkmtAXy8o2qNjroUqqANdb4QdlHV2jUAfUkDuIpVREpNtyfbIGMdyMzRaQ7ZgWdvQeWsGT0E5uw2pGF4exTNdaCZ5VEaawCSzEGN8pHXWpyYYA+ZcbPc/Ufy+oRdlH1Okk0xicRPtWcqRBTeKBOGuqoHwQq9OgUf2qYwuIhyZCo/xVcE3U06kGLo7nUgHVju3eTO9tP1XFJ9k/E/iVA+dTOJ4lYzKJcAgDq0nJk+bQPeKhdEh+FT+DmiEFy5l3MgtMqTupZmIPpFXNzn26UxgLeW2lrSFRVkftAH9qfbk26+tboqKDgDL1pKLl1NGLc83XeiV82h+lAL+8DvQovu470KADERyxPait/u+tELeXXegRn7RQBEGeuWflFKuR+XftQ8z8vymiC5Nd+lAUfGrbu9pVtsWQ5s5IC9kJP5ZCsYn4BAPSBzGwiEzcS0SB+p7LoGA9zy/1VqymbXasdxPh94XRc+FReIGu6veS4T2zOLax6Zu1UlHzJLXAsrgEGQRIPrOoP8VPTCkHeqHhIKDJPL8ds/8Apuz+X/AUj2ArQYTEdOtZJK6ZJIvWAykMAQdCCNCD6iqv7ybBCu8WjorMfgPRSx3U7AnUGBrIizuYgGcpBI3HUe46VU8btPfsMLOXzBBAaRqrBhr0Mgf961o3T4IJNzjCx+HbdzHxEZFB9SzwSO6g1Uv4jhiDfwwI0NtjMEbguXEHpOXT0NOYK1cvTtby/EG1uL/QDAnoxJ9jVl4Wt5bJWSYvYgSYk/8AzF3UwAP4qVbBlrfjHBWXus16yLjMWBzAsQQs23ySVZcuUToVCkEiYyd7heEvXbtxOJ4bDWncOtp7lh7isxLXIyXoVZOgM7nQACei+N/BljiFohgEvAfh3gOZT0B/Uh6qfcQYNebeKcOu4e89i8hS6hhl/wBiD1UjUHqDSSvsynijPiStHc+F2+GWrPk/+aJlLZjOKsAEzJCgfAJ/TEyZJmqzF8A4ORFviVu3+XN96sNy/phj9d+9cVoVHHoTLBCSppHf38SrYQizjuG3QlvLatjEW7IWBABUs+c6frUdNN65hiOJpcLea6s5cuWLKM1xjOhByhRO8wPXSscTXZfso+zpci4vGWwWaDZtONFG4uOp3Y9AdhrueWJR3GWo0scqSbar0NLwvxHFm0pxWHJW2is7MH81goDP/iLykzB3O/UVeWOMllDZAynZ7LAgj1ymD8hmrQCsdhME62hcFxcpa4StzlC/iNtcA0HYg+4qz3Lo6FRbXOLqVC2yDdaYDAgoBu7I0NA0HclRImRJwGDCyZJY/E7GWb0k/wA6CAOgFUnBrd17zXmXJaCBFzfETmJYgAwFPLqd8u2s1eW8SDLSAo/MdB7z6VF32SHicOTUS/ZCjvU+/iREjaqXiOKhWY6wCY9hMVSVEoi2X/EZ5+A2rY93uWy4/wBPl/yabt2rhui/5bXEF18uTcAfhsCJ1IZM43HsYqJh+GXmdEVhmV3a5MwWFx3U+uWRZH+VxWs4QGSyiusPEsJBgsSxEjQ6mrxiQ2TWIjSJ7b0Vv93ymiFvLzUDz9orQgJgZ0mPpS7kRy79qLzI5flRBMmu/SgEQ3ehTn3kelCgE23LGDtR3Tl260q44YQN6K2cu/WgDCiM3WJqHfx6KYdtSJCgEse4VQWP8VH48zi0zJcKEEEEBTmMwEhtpJGukb7TTXDOGApmuFs7iWIZ1n5hsx/qJI7bCGwSU4rbkKpZZ2zo6yfQF1AJ7b07xDh6XVAecoYMVB0aNg3qsmY6wOmlFiMIuTIeZSIObUkdz1996Z4deIw9u7cOgtK7N1+AEn3qE/UFfimzX3/aLafwC/8AtcFWGDTWarcGGMsw5mJYj0LGcveBC/IVf4K3AFZLmRYg8ZwOdNCVuKORx8Snt6j1U6HrVRwviVwlptsHABdQJHoWQKSxUn9vY61psY4APYVT8AwxbPd9TlX2UmT82LfJRV6uVEChdtXzlYRcG0ErcX1iIZfpXN/FeMxvB8X94t3XvYW+xZrVw8hbdl0EW2O4ZQO4MRXVOL5fJfMNURmB6qyqSCp6GuU/bfxQhMPhp1M3H+XKvtrmpVA6r4e43axdhL9kyjjY7ow+JGHRgf8AuKi+JvCOFxwAxFoMyiFuKSrr2DDcdjI7V518KeK8TgLhew4ytGe24lHjqRIIb9wIPuNK694V+17D32W3iEOGuNoGLZrRPd4BT+oR3q6YoxnjX7KLmFttew1xr9pRLIwHmoBu3LpcA3MAEehrM+DPB9/iLlbULbWPMvMDlSdgAPjc75RHcjSfUlQeF8MtYdPLs21tpmZsqiBLEsx/k/LQbAUoWZHwz9lmCwxV3DX7q6hrsZVPqtscvtmzEetbysv4v8cYXh4AvFmusJWykFyNsxkgKvcnWDExXHvFv2pYrFo1q2osWWkMFJa449GeBAPUKB6SRS0gaLxf47xGMxQwHDnKIWyNeQw1w7MUfdLY15hqYkGN99w/hVvDWLS3bjXPKVVVrh0BHUA6A9/i7muB+AeKfd8dYeYUuEb/ACvyn/evRWFtZ7twkS65cs/lVljT0JZXk76D0FU7YIeN4qcjHKwXqcpG+ggtCkmREE70jgllrrebcUhVgWrZ/JH52A0NwnWfyjQRrN3jLIe01omCQQD+k7qfkYPyqDwC9K6iGBIZfQgww+RBHyqGqYJ2MtEiqHidslHA3KMB7wa1N4SKpMXb1P8ANRNUSiX91tl0xCSGKxIOjqwBhhsdlIO+g6aU7fxdtQC51MwACWaN4VQSYnoKheHrwCsh/wCGYH+U6p8gJX+g0vBANdvMdWzhZ9FCrlHtqTHqxrS+LKi7XFrbMFYlZMDOjJPoAWABPaanXeXbrUO/wxDmlnJO/O0e2Scsdo95qu4KHt33ttdIRRyW40YaayZIyyOVYHOu3wgn6gv1QEZjvSLbZjB2oMhJzDal3GzCBvVgK8hfShTHkH0oqAdNvLrvQjP2ikoTPNMd6O5+36UBn+JWbpvpnuKbYzMLYQ8qKsMSxOrEsq7fCWAjWZF29dLhEPNGZgTCjpEgExOgiCSGJMCCw2NDO9ydCAJ/9NCRm0/WxeI3AFSLaNbsXrrCLjIzAH8sKcie43P7maqdskF7Fm5h1K6NdCqvWC8Ce4AJb2Wk8XvjksKIUAMw9FQgIO0sP4RhR4a0BcAGiWLY16BiCJnplQH5XKqEu5sQ9wzN1FIBBhVUtkXsxVw5XcZ6q+IgtsMNqtLmICKWbYCSfQDc/Lequw0QasMQeWarF0Sys8Q4klVRWjzNMwjQZS0r6mBp8qYwV66qhVulVUQBltwABp+XbSqnh+FyM65sy2nZLQP/AA0MNlH8x7Ko6VNxSM1sqgBYwIJgESMwJgxIkTHWobdglYXHnEDKIKh5e6oIR1BBhJ3JIykAkAK2uorhv2m8T8/H3SDK24tr/SOb/mLV3Lg2EuXM/nNA8wylvMF+FDq/xH5Zevy4f9qfD/J4nfUABHyOgG2VkUaAbDMrj5VpT7ZCMpQoUKEnefsM45cvYW5ZuEt93ZQjHfI4JVCeuUq0diB0roXE8atm1cvOYS2jO3sqlj/tXOfsBw4GDvv1bEEHsFt24H/MT860P2sXSvCsUR1VFPs1xFb6E1ddEHnXjPFLmJvXL90zcuMWP7fRR+1RAHYVDoUKoSAGNRuNq9KcA4uXw9nFqC4a0BdVdWPWVA3Ktn09GPUAHzUxgTXp7w5wHycLYthjbupZtKx/KzKgBzIdDqNxBiNaV6BjVriNy6M63gNYKoqwh/Sc4JkaensKbwmIZL4ZmLeaYOijmC6EAAbhdfb3qJwkXYRrgQA2kAKk80aiVI5SAxB1M6U9ftBh6EGVPVSNQw7is3Jg1NrFKSUBkgCe06gHvGsekeoqJjhqKrvCNqLCMTme4PNdv1NcGY/xoo7KKsca+sVaTtEFYt0W7iuTCyEf2YgKfk0a9AWqyjJiCvS4oYf5lhW/5Tb/AINUnGQpturAkNCkKCTBMMQBroJOnpVj5uexnYzdw5knqwUakeue2SR3btUw5VBir+JuGXEC2r5DzGeglhGgkjUGRodpFRuKWXdrRW5kOYL5hWfiB8tiARrmOQjY5m09JuDQNcv221RwjMOhzq1s/wD6x/NQ7khWtOdRys/WCT5V4empJPowPpU+VgvLDuFCvlLbErIB7gHUe0n3p0rk136Uxw3EC5bDGA+zj9LjRh/O3aKetzPNt3rQgP7z2oU5C9qFAIa5m0FVvFOG58ssJGbQqWQhonMuZZPKOvr61ZugUSN6K2M2/SgK2zwoyHd8wBDBQuVZGxI1JiNATA33AIl46151t7YMZlIn0kET9adLmcvTalOuXUe1RQM/dw14kqUYZiC657flMQAuaR+IVhRywJgTEmptzhA8vLm5gc/mRrnO7EehkiJ+HQRpVmiZtTULH44pChczMSAJgaCSWPQbbAnUVFJAgcPBYQRDAkMPQgwYPUeh9IqTjrpGW2ol2+EdOks3ookSe4G5FN4YC1bZ3MnViY1YkzAHuYA9hUzh2EMG4/8Aivq3ooE5UHYfUknrVIxslkccDtBYdQx1m4BDliZLZhBBJJOh61T4WQYJkqzKT65WKzptMT861SPmMHaspbt5vMmYZ7224m44/kVOToIvuCH8Fd5eX16ZyWAPsCB8q5h9vHAzlw+LA+Emzcj0PNbJ7Ahx/WK3q8WZYBaxI9SV+kmP5qL4jtPi8LdsOltkuIYKsZUjVGWVIJDAESRtvU7lQPNdCl3rLIxRxDKSGB6EbikVBJ2D/wAPvEDOKsHbkur7mUf6Lbrp/irhv3jB37HW5adQfRspyn5NB+Vcw/8AD7w8zir525LS+4l3+jW66d4r4l93wd+/1t2nIHq2UhR82IHzq66IZ5PRpAPqKVSUWAB6ClVQk0P2f8H+9Y+xaIlFYXbn+S2QxnsTlX+uvTjHPt09a5B9jPDrlm1dxItKWvEKrOxEIuvKApJltzp8C10NuMMpibIPUFifppUqSRDIjplzW/0Oy/I86D/Sy1M4Pw9GUXbqhyxMBhIUSQsKdJgSTvr6RUW4SxZyVLMQeUQNAFG5MnTerTw++ayFOwa4P9NxwP8AaqwrcwxoJ5LwBFpmOU9EZjJQ+gJJKnbXLpyy/i7X5ql4m0MpQiVYag/96VBwxbW05l1AIb9an4W99CD3E6AiplEIa4Rh5IvNtqLQ9AdM57kbegPcgMX+FupPlh8hBUZCgdVM/hlbnKygk5TMrMbTMnAXijLZYShJFthuuhbIw9AAYI7A+ptHfLoNqskmuAV/DLBGcsuUsEVVkHKqTGYgkZpZtp6U7jMCrRJIYTBEHQ/EpDCGU6SD6etTmQAZhvSbfPv0qa4ogqbXBmzrcLoQpB0Qq7ZdgzZyCPlVuz5tB9aSbhBy9KU65dRRKgJ+7n1FCi+8HtQqQHbUgydqO7r8NDzM2kRQnJ3mgDDCI6x9aJBB5tqPy/zT3iizZ9NutAFcBJldqruOMPwI38wg+3lXZ+oH8VZZ8mm9VvGF5rOv5mb+EZf/AHiqy6ALcPdRT8NsByPViSLfuBDn3CmrFlJMjaqi3eyrirkTkJMeoWxbaJ6az/Ncj4j4zx2ILsl17VnPmCpHIDoqs4E7DaYJJ0qu5RRjlzLH2dtxGNtghPMQOYIUsASCcogHeToO9U/HrmEwtp799UJOYqjH/FeC2VEY5c7EHpvrXCsTgWVEZ1bKV/DnWVBI5B0WZ20370L+MuOEFxrlwICEDsWCCdhJ06fwPQVX4v0OR6+r+Xk6De+062r/AIGDBt/uYITIUxCoQIOYdZgGomP+0BHb8PBi2cwYXZGcCUM5Qscwzg66grvWSwwQ23DI+fQqwYZVAPOHETtsQRBp67iVuh7l5mF3KgVQiQcoyw2UjJCqmwM1m8zujaGPUy00tSmtqfXmNfaUuFuXVxGFuM+cfihlYMGH5jIAM9uo9qxlaYup0I0OkEGqDG4U22jodQfUf9a0jKyNLrPiPbJU/wC52z7AcWpwl+1pmS/mPs9tApPzRx8q0/2o4U3OF4tV3FvP8rbLcb6Ia51/4fc33jFR8PlW83vnbJ9M9dm4jl8q5n+DI2adoymfpWq6O08iVL4RhVuXkR2yWywzvBOVZ1MDU+wqFh1JCjckDTvWiwlgWlg/Edzr/A7CspSo59TqVij6t9I6HjPF+GtOqWLTYiwlsKoflyGRJWVk6KACdRmbWNKdT7TggVVwKhYXMM4EaahFybaiCf4rEYTIQ+dmU5TkhQZboGJYZQf1QY9KkjEi4We8jsFthEylV+EKtosQpBUBSPUxvWby06KYIanPgnmTSUf8HTPDviLBY66UW0tq7CkAwruSpZwhQhmC5TPyPWtbdxFm0qpnS3pygsFkSASJOurAT6sOprzkt1lYMgZWUgqymCCNiCNulKIa9clyz3WI5mMkkmBzH39dK0WQ5o+IPbyuT0rbMfFVfxVSsXh/wzJP7DGf5AQ39Arh2C4ljcNccWrl1XVma4jcwk5Q5uKwOvKoLHUeutdS8A+IHxmEZLq89seU7zPmcmrkRoSDqPWaupqXB14tQpuqp/Ut7qk37X+Zj/8Abcf3NXKMAIbeqHD3jOGc7nLP9Vl/7kVe5M2u1IdHSwkUgydqO7r8NDPm5YjvQ+DvNXIFKwAg70i2CDLbUry55p7xRZ8+m3WgHPMXtQpv7t3+lCgFXFAEjeitifipKIVMnajuDNt0oAixmOk/SlXBA5d6MOIy9dqSi5dT7UAaAES29ZHxvx+1hcju5N4BgloLJdWKyTqMglBzE+sBjpWtdM2orkHj7w5iGxly9o9u4VCGfhhAMkHbUMe8zvNZ5ZqMbfRlllNR+RWwvtIuuzr5d4mxdQZ7atoW5fjA6lUtkT+kx1rO4W2Ut3GF3ISAhtjNNxSQTJAjKIB1OtaC8cZcw9vDPbTyrZBXQZhEgc0+hI2osP4df8xVR21rzsusxL+o544tStTHLjg3XNPhFF90IVkveaLqBcoKwsNLMCGMruCMunMar8SYGgrd3+G2EGa/c9NXYDYQB30AFZPjmJsl4sqcoGrGQCZ6A6x3rPDqVkltinXqW8T0GoyOWqnS64RXWOI3LYcLmUOpVo6qSJBI6GNR1in14g1xEtnVbebLpqMxzEE9dZOu0mohxA9D/BqRhFn512M8OWSSg48pel8foPvh7Yth84zZtbcNOUAktmGkSAI0OtKx2Gt3rdy5+GgZ5S0Cc6ZuYFARqgmJMTEVMEZGXIhLQAxEskHNyehOgPaR1qDjpYIEt5WVMrESc5BJzkdDBGg006VTfz2ejhzaZ6NRjB/Gu759fX2Nx9hi2rVu/bLr573Acuxa2qKFKz8QDM8xtOu4nVfajjDb4ZiY+J0FoDqfMYW2A9TlZj8q4ouGvAhlzhgZVlVgyn1DAyp7ipXFb+LvsGvPduFRC51PL7KAAO5Ak9ZrZaiNdo6IanJt5i79nRB8OcIWZd7auVMFzCrA2mDzH/8AnvY2jautbRstkIpDvlc5iczgkDZtQkdhqKg28O4PMpj2Iq5S4pe4ws2wrghUIJ8rUEFGJnNoNT6n1rGU7dpmeLPgjjyPUwbk18r54K4XvKYOo1VgRIn4TIkddtqZ/wDN7h8zmYi6ZuQNHIYsCRtuSQR6mpOKSq83QDEH+DVkeRhyy2tK+e+Q7Nwzqv8A0qysWLcMWz6KcuQDVvyzJELO8Sag2MQoYEqSARK7GJH9q2uDs4O8ALbAN+mYYf0nesNRn+H3Fv2PT0Hh2XN/3Qr5X0+jPWLV2biXLrWhdTPzC5+KJDoG3JzEkhjppUfg63kvL5N1rTOygspgRO7dCo1JnStXjPD7NqrzAAGb0AgCfQARUfh2ExOGui7aRC4BAJ1Gu5iRr0nuaph1mL8Ve536+OrzaiOSUKS449DWXPEOHGLTDPcCIPLKNEq7TKIbgMJsnTWYkddq5IMLtXC8dwHFYm6xNtTcusTAIA13MdFFdr4Nbe1YtW7jZ7iW0V2H5mCgMdfUg16ODLGabi7RbHLI5NSi16X6Ex1AEjeit6/FSVQqcx2o7nPt0rc1CZiDA2pbgASu9AOAMvWkouXU0AjzG7/xQp77wO9CgELczaGgxybdfWlMRHLE9qK3+760APL0zdd6JWz6H30oiDPXLPyilXI/Lv2oAmfLoPrTONwaPbZWEqw1H9x6Ebg+oFSLcRzb96QoM6zH0qGk1TBgzbZGa23xIYn9Q3VvmIqu8QXbq2fwfiLAEjdQZkieuw+dbzi3B7d4hpZXAjMhExuAQQQevTqaYt+GLEQ+d2/c5EfJIH0rwZeFzWW41t8rPShrYpJtcnHE4VdZp8t2Y7s0kn3LVMt+FrjHM7Kgj+P7VtMThnts1l5zRyttnU6Bh39fQ/Kstdw1y6gZQzB7QV1eQDNuCRm/OrgiNNHbtWCyZFJpvbR2anULUYtkora/JBYPgOGJy+cHbXRWHQgHQehI/mpS2cKhCrbzE549Cbbi24k9QTMdQCRtUm1am4rcuZbrMFBJbK1rIQAo3zQY/bTWL4WbKeZdt3ymcPItPyNCZjrJVTlbfSHIqFum+5P2s89YMONcRS/JCrGLt8kWVWWytP5fw1ugiF1lWG8Qabt8UdwjW1tqGCkggsQSl1mEqwGhtET3qoTxBhwgVVuPE8xYAtKeXrlj8oA09B1pr/4htKSRY1LFjLMdSbhPYf4tzT93tUrTyfUX/PczeuwR4c1+X+kX3/mN1rBdFXzPMRVBXQ5gm4LerHr6UVzi7IqlgssLsSsAFQSmxMqQrmZB0qjHiJV1FlBqpjoCnwn3Hr2FJt+I0OnkWt5Og6hhO3o7D+o1b7NL8P8AYr/yen73/sad8Wyi+WyN5Q05coYlAwBYsR1A7aGo7cQzMVFq2dUyyYzpcCZWkAxqbg/oHrVHb8TopP4AE5SYJ1yxB9+Vf4FGnHcOFVfJZQoAUq5lQI0BmY5RVPs8l3F/z2ZZeIYH1Nfz3RZ4nFYfTNhyQ1tbkrlkBhMESNY/mDSLvCcKxIGdTOkBjIlhmAE8vI2pjb2leCuW8XKWEv6FTyJKoUQqusQsSCATuBUt8A1t8+YowGQeYjKAmYt+YEMwJOugI9N6bXFf1L9a/wDDTZiy80mvyKS54XVxNm8j66ag7ESNKj4rgl0aNbkdtasrfDLgXUAkI0OoVwS3lRmXRioyZdN1Gu9XHC7rAXM4OjwNWMyBCANsQTl0kGAdyameaaVqW47NFJaZOMIpJ8v3oqfDJvrcyNn8oqTDzykRGUnWNYjatO7AAk7CrrBeGkKBroJuNqSrMMnogymDHz1J7U/b8NWQZZ7jx+VmWJ6A5VBOvSfetJeHZsjUuFZnk10JSbr9OhXh3h5tp5rD8S5qQfyLuq9vU9z2FXapm1P0ok/dt3orgM8sx2r3sWOOOCjHpHlzk5O2GHzcp2oNybdfWlORGkT23orf7vlNaFQC3PN13olfNofpRMDOkx9KXciOXftQA+7jvQpqG70KAWLeXXegRn7RRI5YwdqO4cu1AH5n5flNEFya79KUFEZusTSbbZtDQAKZ9dqM3J5aTcYqYG1LZABI3oBI5O80Dbzc1C1zb9KJnIMDagIfEcAmIADSCplWB5l9YPofQ9vSotvw9YU8ym4f3sSP9Pw/Srh1CiRvQtjNqaylgxt7pRTfsXU5JUnwNWcKqCUCqu+VQAPpTpOfbSKTnM5ekx8qVcGXatKKFHxbwtg78+bh0Zzu68jn3dIJ+ZrN4z7KMPqbd68nY5WA9pAP8mugIoYSd6SjljB2qHFMznhxz+8kcuP2T3D8OLQj91kj/ZzTQ+ym9mg4m2O4tE/+4V1e5y7daMICM3Xeo+HEx+x4vwnOLP2TIut3FXG/+mip/wDkXq84d9nmBTXyvMPrdYvPuvwfStUjZjB2oO2UwNqlQS8jSOnxx6ihFpVChFUKBoAAAB7AbUsDJvrNKZABm670m1zb9KtRsV+I4DYucxtqpPVeU/MpE/OmMDwG0rhgXYj4c5BC9wABr7zVs7kGBtSnQKJG9ZPBjcrcVfsX+JKqvgIHJpvNDy/zfOPrR2xm1NJzmcvSY+ValBROfTagHy6b0Lgy6ijtoGEnegEi3l5qB5+0USOSYO1Hd5dutAH5kcvyogmTXfpSlQESd6RbbMYO1AK+8j0oUvyF9KFAf//Z",
          }}
        />
        <Text
          style={{
            alignSelf: "center",
            color: "green",
            fontSize: 22,
            fontWeight: "bold",
            marginBottom: 50,
          }}
        >
          NOMIS Child Monitor App
        </Text>

        <Title style={{ fontWeight: "bold" }}>Device Activation</Title>
        <Paragraph style={{ marginBottom: 20 }}>
          Activate this device to start using App.
        </Paragraph>

        <TextInput
          mode="outlined"
          label="Activation Code"
          placeholder="Type something"
          onChangeText={onChangeActivation}
          value={activation}
          outlineColor="green"
          activeOutlineColor="green"
          secureTextEntry
          right={<TextInput.Icon icon="eye" />}
        />

        <Button
          style={{ marginTop: 20 }}
          buttonColor="green"
          mode="contained"
          onPress={() => navigation.navigate("Home")}
        >
          Activate
        </Button>
      </View>
    </View>
  );
};

export default DeviceActivation;

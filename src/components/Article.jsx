export const Article = ({ image, number, title, text }) => {
  return (
    <article class="flex h-[162px] md:w-[343px] md:flex-grow">
      <div class="w-[100px] flex-none">
        <img src={image} alt="Imagen1" />
      </div>
      <div class="pl-6">
        <p class="text-gray-400 text-3xl mb-[18px] font-bold ">{number}</p>
        <h2 class="font-bold mb-[18px] hover:text-orange-300 cursor-pointer">
          {title}
        </h2>
        <p class="text-gray-400 font-bold">{text}</p>
      </div>
    </article>
  );
};

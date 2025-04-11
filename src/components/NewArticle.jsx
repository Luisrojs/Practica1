export const NewArticle = ({ title, text }) => {
  return (
    <article class="h-[140px] border-b-2 border-gray-300 py-7 last:border-none">
      <h2 class="cursor-pointer hover:text-orange-600 text-[20px] mb-3 font-bold">
        {title}
      </h2>
      <p class="text-[15px]">{text}</p>
    </article>
  );
};

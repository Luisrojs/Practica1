export const NewArticle = ({ title, text }) => {
  return (
    <article class="h-[140] border-b-2 border-gray-300 py-4 last:border-none">
      <h2 class="cursor-pointer hover:text-SoftOrange text-[20px] mb-3 lg:text-16px font-bold xl-[20px]">
        {title}
      </h2>
      <p class="text-[15px] md:text-[12px]">{text}</p>
    </article>
  );
};

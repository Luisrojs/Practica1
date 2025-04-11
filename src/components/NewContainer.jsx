import { NewArticle } from "./NewArticle";

export const NewContainer = () => {
  return (
    <aside class="bg-slate-950 text-neutral-50 py-[28px] px-[20px]">
      <h1 class="text-orange-300 text-4xl font-bold">New</h1>
      <NewArticle
        title="Hydrogen VS Electric Cars"
        text="Will hydrogen-fueled cars ever catch up to EVs?"
      />
      <NewArticle
        title="The Downsides of AI Artistry"
        text="What are the possible adverse effects of on-demand AI image generation?"
      />
      <NewArticle
        title="Is VC Funding Drying Up?"
        text="Private funding by VC firms is down 50% YOY. We take a look at what that means."
      />
    </aside>
  );
};

import imgMobile from "../assets/images/image-web-3-mobile.jpg";
import imgDesktop from "../assets/images/image-web-3-desktop.jpg";

export const MainArticle = () => {
  return (
    <section>
      <picture>
        <source media="(max-width: 640px)" srcSet={imgMobile} />
        <source media="(min-width: 641px)" srcSet={imgDesktop} />
        <img src={imgMobile} alt="Imagen del articulo Principal" />
      </picture>
      <div class="sm:flex">
        <div class="flex-1 py-[24px]">
          <h2 class="text-[40px] font-bold sm:text-[58px] leading-none">The Bright Future of Web 3.0? </h2>
        </div>
        <div class="flex-1">
          <p class="text-[13px] mb-[10px] sm:15px pt-9">
            We dive into the next evolution of the web that claims to put the
            power of the platforms back into the hands of the people. But is it
            really fulfilling its promise?
          </p>
          <button class="bg-orange-600 w-[185px] h-[48px] uppercase text-neutral-50 hover:bg-slate-950 ">Read more</button>
        </div>
      </div>
    </section>
  );
};

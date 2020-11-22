import Link from "next/link";

const Button = ({ href, text, targetBlank = false }) => {
  return (
    <Link href={href} passHref>
      <a target={targetBlank ? "_blank" : ""}>
        <button className="transform hover:-rotate-3 w-full inline-flex justify-center items-center text-white font-medium px-5 py-3 rounded-full transition duration-200  bg-pink-600 hover:bg-pink-500">
          {text}
        </button>
      </a>
    </Link>
  );
};

export default Button;

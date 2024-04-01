import React from "react";

interface Props {
  className?: string;
}

const CircleText = ({ className }: Props) => {
  return (
    <svg
      width="300"
      height="300"
      viewBox="0 0 300 300"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g clipPath="url(#clip0_2001_8486)">
        <path
          d="M143.121 38L143.121 16.1818L150.493 16.1818C152.204 16.1818 153.604 16.4908 154.69 17.1087C155.784 17.7195 156.594 18.5469 157.119 19.5909C157.645 20.6349 157.908 21.7997 157.908 23.0852C157.908 24.3707 157.645 25.5391 157.119 26.5902C156.601 27.6413 155.798 28.4794 154.711 29.1044C153.625 29.7223 152.233 30.0313 150.535 30.0313L145.251 30.0313L145.251 27.6875L150.45 27.6875C151.622 27.6875 152.563 27.4851 153.273 27.0803C153.983 26.6754 154.498 26.1286 154.818 25.4396C155.145 24.7436 155.308 23.9588 155.308 23.0852C155.308 22.2116 155.145 21.4304 154.818 20.7415C154.498 20.0526 153.98 19.5128 153.263 19.1222C152.545 18.7244 151.594 18.5256 150.408 18.5256L145.763 18.5256L145.763 38L143.121 38Z"
          fill="#5603A9"
        />
        <path
          d="M190.384 38.3235L193.373 29.1236L195.764 29.9006L190.708 45.4633L188.317 44.6864L189.173 42.0521L189.01 41.9994C188.389 42.6712 187.603 43.1589 186.653 43.4626C185.705 43.7595 184.644 43.7171 183.468 43.3352C182.496 43.0191 181.7 42.5254 181.082 41.8541C180.466 41.176 180.082 40.3344 179.931 39.3293C179.782 38.3175 179.922 37.1497 180.352 35.8257L183.565 25.9369L185.957 26.7138L182.796 36.4406C182.427 37.5753 182.451 38.5836 182.866 39.4654C183.289 40.3494 183.996 40.9526 184.989 41.2753C185.583 41.4684 186.237 41.5129 186.951 41.4086C187.671 41.3066 188.343 41.0095 188.965 40.5174C189.595 40.0275 190.068 39.2962 190.384 38.3235Z"
          fill="#5603A9"
        />
        <path
          d="M207.648 53.4439L217.266 40.2054L219.231 41.6332L217.728 43.7017L217.901 43.8269C218.69 43.3206 219.534 43.0954 220.433 43.1513C221.335 43.2015 222.218 43.5397 223.08 44.1659C223.953 44.8005 224.536 45.5268 224.828 46.3449C225.13 47.1614 225.189 48.042 225.003 48.9867L225.14 49.0869C225.976 48.6495 226.879 48.4759 227.85 48.5663C228.824 48.651 229.785 49.0377 230.733 49.7265C231.917 50.5865 232.616 51.6605 232.83 52.9486C233.048 54.231 232.592 55.6507 231.461 57.2078L225.023 66.0679L222.989 64.5901L229.426 55.73C230.136 54.7532 230.376 53.861 230.147 53.0533C229.917 52.2456 229.44 51.5787 228.716 51.0527C227.785 50.3765 226.86 50.1341 225.939 50.3256C225.023 50.5115 224.254 51.0324 223.632 51.8886L217.37 60.5073L215.301 59.0045L221.889 49.9375C222.436 49.1848 222.632 48.4012 222.477 47.5867C222.327 46.7664 221.867 46.0766 221.097 45.5172C220.569 45.1331 219.972 44.9149 219.308 44.8625C218.649 44.8142 217.998 44.9378 217.353 45.2331C216.718 45.5269 216.165 45.9984 215.693 46.6477L209.682 54.9217L207.648 53.4439Z"
          fill="#5603A9"
        />
        <path
          d="M231.99 82.7429L250.193 69.5177L251.62 71.4828L249.517 73.0107L249.693 73.2521C250.031 73.2345 250.474 73.2284 251.023 73.2339C251.581 73.2409 252.182 73.3921 252.827 73.6875C253.482 73.9844 254.122 74.5638 254.748 75.4257C255.558 76.5403 255.993 77.7254 256.054 78.9807C256.114 80.236 255.807 81.4737 255.13 82.6937C254.454 83.9136 253.421 85.0288 252.03 86.039C250.628 87.0576 249.24 87.7021 247.865 87.9724C246.495 88.2386 245.222 88.1539 244.046 87.7184C242.875 87.2787 241.888 86.5073 241.087 85.404C240.469 84.5537 240.115 83.7705 240.025 83.0546C239.941 82.3344 239.979 81.705 240.141 81.1662C240.308 80.6232 240.459 80.1894 240.591 79.8646L240.466 79.6923L233.468 84.7769L231.99 82.7429ZM245.026 76.3264C244.026 77.0528 243.251 77.8402 242.7 78.6884C242.154 79.5325 241.87 80.3926 241.849 81.2688C241.832 82.1408 242.121 82.9848 242.714 83.8007C243.331 84.6511 244.071 85.1979 244.933 85.4411C245.804 85.6859 246.726 85.6744 247.699 85.4064C248.682 85.1401 249.644 84.6646 250.587 83.9799C251.518 83.3036 252.252 82.5505 252.79 81.7205C253.339 80.8921 253.622 80.032 253.641 79.1401C253.671 78.2498 253.372 77.3737 252.746 76.5119C252.145 75.6844 251.43 75.1416 250.601 74.8832C249.778 74.6207 248.889 74.6171 247.934 74.8725C246.984 75.1238 246.014 75.6084 245.026 76.3264Z"
          fill="#5603A9"
        />
        <path
          d="M283.818 140.791L283.818 143.817L273.634 149.868L273.634 150.124L283.818 156.175L283.818 159.201L270.991 151.317L262 151.317L262 148.675L270.991 148.675L283.818 140.791Z"
          fill="#5603A9"
        />
        <path
          d="M256.195 184.503C256.651 183.098 257.386 181.974 258.399 181.131C259.411 180.295 260.614 179.774 262.009 179.571C263.403 179.374 264.903 179.536 266.511 180.059C268.132 180.585 269.451 181.339 270.469 182.32C271.485 183.307 272.157 184.436 272.483 185.707C272.807 186.985 272.741 188.326 272.284 189.731C271.828 191.136 271.094 192.257 270.083 193.093C269.07 193.936 267.863 194.455 266.463 194.65C265.061 194.852 263.549 194.689 261.928 194.162C260.32 193.64 259.012 192.886 258.003 191.901C256.991 190.923 256.324 189.795 256 188.517C255.673 187.246 255.738 185.908 256.195 184.503ZM258.343 185.201C257.996 186.268 257.984 187.235 258.308 188.102C258.631 188.969 259.184 189.713 259.969 190.333C260.753 190.954 261.665 191.433 262.705 191.771C263.745 192.109 264.768 192.259 265.774 192.22C266.78 192.181 267.672 191.907 268.45 191.398C269.227 190.889 269.79 190.1 270.136 189.033C270.483 187.966 270.492 186.998 270.162 186.129C269.831 185.26 269.271 184.514 268.48 183.891C267.689 183.268 266.774 182.788 265.734 182.45C264.693 182.112 263.674 181.964 262.675 182.005C261.675 182.046 260.79 182.322 260.019 182.834C259.248 183.345 258.69 184.134 258.343 185.201Z"
          fill="#5603A9"
        />
        <path
          d="M243.731 222.918L251.557 228.604L250.079 230.638L236.841 221.019L238.318 218.985L240.559 220.613L240.66 220.475C240.213 219.677 239.992 218.779 239.996 217.781C240.007 216.788 240.375 215.792 241.102 214.792C241.703 213.965 242.418 213.361 243.248 212.98C244.083 212.604 245.002 212.499 246.005 212.665C247.013 212.836 248.08 213.331 249.207 214.149L257.618 220.261L256.141 222.295L247.867 216.283C246.901 215.582 245.935 215.292 244.968 215.415C243.997 215.544 243.205 216.03 242.591 216.875C242.224 217.38 241.979 217.989 241.858 218.699C241.732 219.416 241.807 220.146 242.083 220.891C242.354 221.641 242.904 222.317 243.731 222.918Z"
          fill="#5603A9"
        />
        <path
          d="M218.486 238.682L228.104 251.92L226.139 253.348L224.686 251.349L224.548 251.449C224.783 252.279 224.732 253.128 224.397 253.995C224.061 254.862 223.497 255.584 222.704 256.16C222.554 256.268 222.366 256.401 222.137 256.558C221.909 256.715 221.733 256.83 221.61 256.902L220.107 254.833C220.189 254.801 220.365 254.712 220.638 254.567C220.908 254.431 221.178 254.266 221.448 254.07C222.092 253.602 222.569 253.05 222.878 252.412C223.186 251.785 223.315 251.129 223.266 250.445C223.215 249.771 222.972 249.135 222.538 248.537L216.452 240.16L218.486 238.682Z"
          fill="#5603A9"
        />
        <path
          d="M157.114 262L157.114 283.818L149.486 283.818C147.966 283.818 146.713 283.555 145.725 283.03C144.738 282.511 144.003 281.812 143.52 280.931C143.037 280.058 142.796 279.088 142.796 278.023C142.796 277.085 142.963 276.311 143.296 275.7C143.623 275.089 144.056 274.607 144.596 274.251C145.129 273.896 145.708 273.634 146.333 273.463L146.333 273.25C145.665 273.207 144.994 272.973 144.319 272.547C143.644 272.121 143.08 271.51 142.625 270.714C142.171 269.919 141.943 268.946 141.943 267.795C141.943 266.702 142.192 265.718 142.689 264.844C143.186 263.971 143.971 263.278 145.044 262.767C146.116 262.256 147.512 262 149.23 262L157.114 262ZM154.472 264.344L149.23 264.344C147.504 264.344 146.279 264.678 145.555 265.345C144.823 266.02 144.458 266.837 144.458 267.795C144.458 268.534 144.646 269.216 145.022 269.841C145.399 270.473 145.935 270.977 146.631 271.354C147.327 271.737 148.151 271.929 149.102 271.929L154.472 271.929L154.472 264.344ZM154.472 274.23L149.571 274.23C148.776 274.23 148.058 274.386 147.419 274.699C146.773 275.011 146.262 275.452 145.885 276.02C145.502 276.588 145.31 277.256 145.31 278.023C145.31 278.982 145.644 279.795 146.311 280.462C146.979 281.137 148.037 281.474 149.486 281.474L154.472 281.474L154.472 274.23Z"
          fill="#5603A9"
        />
        <path
          d="M109.616 261.677L106.627 270.876L104.236 270.1L109.292 254.537L111.683 255.314L110.827 257.948L110.99 258.001C111.611 257.329 112.397 256.841 113.347 256.538C114.295 256.241 115.356 256.283 116.532 256.665C117.504 256.981 118.3 257.475 118.918 258.146C119.534 258.824 119.918 259.666 120.069 260.671C120.218 261.683 120.078 262.85 119.648 264.174L116.435 274.063L114.043 273.286L117.204 263.56C117.573 262.425 117.549 261.417 117.134 260.535C116.711 259.651 116.004 259.047 115.011 258.725C114.417 258.532 113.763 258.487 113.049 258.592C112.329 258.694 111.657 258.991 111.035 259.483C110.405 259.973 109.932 260.704 109.616 261.677Z"
          fill="#5603A9"
        />
        <path
          d="M71.8051 247.324L74.008 248.135C73.9017 248.523 73.8562 248.942 73.8716 249.392C73.877 249.844 74.0004 250.302 74.2419 250.767C74.4834 251.232 74.9 251.68 75.4918 252.11C76.302 252.698 77.1128 253.002 77.9243 253.021C78.7258 253.042 79.3332 252.767 79.7465 252.199C80.1139 251.693 80.2201 251.16 80.0653 250.6C79.9105 250.04 79.5133 249.378 78.8738 248.615L77.2594 246.705C76.2845 245.557 75.7219 244.477 75.5715 243.463C75.417 242.456 75.6758 241.489 76.3479 240.564C76.8989 239.806 77.6099 239.286 78.4807 239.006C79.3458 238.722 80.2915 238.689 81.3176 238.908C82.3438 239.126 83.3711 239.609 84.3997 240.357C85.7499 241.338 86.6546 242.443 87.1136 243.672C87.5727 244.901 87.5109 246.164 86.9283 247.461L84.647 246.541C84.9808 245.695 85.0214 244.908 84.7688 244.18C84.5105 243.448 83.9648 242.78 83.1317 242.174C82.1836 241.486 81.2848 241.14 80.4352 241.137C79.5757 241.136 78.9393 241.42 78.526 241.989C78.1921 242.448 78.0732 242.95 78.1696 243.494C78.2617 244.044 78.5847 244.639 79.1385 245.278L80.9692 247.398C81.9729 248.566 82.54 249.659 82.6705 250.675C82.791 251.694 82.5195 252.659 81.8557 253.573C81.313 254.32 80.6232 254.828 79.7863 255.098C78.9436 255.364 78.0385 255.395 77.0708 255.193C76.0974 254.986 75.1452 254.544 74.2144 253.868C72.9043 252.916 72.0846 251.882 71.7551 250.764C71.4198 249.643 71.4365 248.496 71.8051 247.324Z"
          fill="#5603A9"
        />
        <path
          d="M60.1292 216.85L46.8908 226.468L45.4129 224.434L58.6514 214.816L60.1292 216.85ZM43.9329 227.037C44.221 227.433 44.3343 227.873 44.273 228.357C44.2075 228.835 43.9851 229.211 43.6059 229.487C43.2267 229.762 42.7998 229.857 42.3252 229.772C41.8464 229.681 41.463 229.437 41.1749 229.041C40.8869 228.644 40.7756 228.207 40.8411 227.729C40.9024 227.246 41.1227 226.866 41.5019 226.591C41.8811 226.315 42.3101 226.223 42.7889 226.314C43.2635 226.4 43.6449 226.64 43.9329 227.037Z"
          fill="#5603A9"
        />
        <path
          d="M35.3429 191.417L44.7049 188.375L45.4818 190.766L29.9191 195.823L29.1685 193.513L31.6001 192.723L31.5343 192.52C30.6255 192.412 29.8106 192.065 29.0896 191.478C28.3618 190.893 27.807 190.012 27.4251 188.837C27.0827 187.783 26.9993 186.791 27.1748 185.86C27.3436 184.932 27.7923 184.106 28.521 183.384C29.243 182.664 30.2659 182.089 31.5898 181.659L41.4786 178.446L42.2556 180.837L32.5288 183.998C31.3062 184.395 30.457 185.022 29.9811 185.878C29.4984 186.737 29.437 187.72 29.797 188.828C30.045 189.591 30.4321 190.22 30.9584 190.713C31.4826 191.2 32.118 191.513 32.8649 191.651C33.6118 191.789 34.4378 191.711 35.3429 191.417Z"
          fill="#5603A9"
        />
        <path
          d="M38.3409 149.568C38.3409 151.145 37.9929 152.505 37.2969 153.649C36.5938 154.785 35.6136 155.662 34.3565 156.28C33.0923 156.891 31.6222 157.196 29.946 157.196C28.2699 157.196 26.7926 156.891 25.5142 156.28C24.2287 155.662 23.2273 154.803 22.51 153.702C21.7855 152.594 21.4233 151.301 21.4233 149.824C21.4233 148.972 21.5653 148.13 21.8494 147.299C22.1335 146.468 22.5952 145.712 23.2344 145.03C23.8665 144.348 24.7046 143.805 25.7486 143.4C26.7926 142.995 28.0781 142.793 29.6051 142.793L30.6705 142.793L30.6705 155.407L28.4972 155.407L28.4972 145.35C27.5739 145.35 26.75 145.534 26.0256 145.904C25.3011 146.266 24.7294 146.784 24.3104 147.459C23.8913 148.127 23.6818 148.915 23.6818 149.824C23.6818 150.826 23.9304 151.692 24.4276 152.424C24.9176 153.148 25.5568 153.706 26.3452 154.096C27.1335 154.487 27.9787 154.682 28.8807 154.682L30.3296 154.682C31.5653 154.682 32.6129 154.469 33.4723 154.043C34.3246 153.61 34.9744 153.01 35.4219 152.243C35.8622 151.475 36.0824 150.584 36.0824 149.568C36.0824 148.908 35.9901 148.311 35.8054 147.779C35.6136 147.239 35.3296 146.774 34.9531 146.383C34.5696 145.993 34.0938 145.691 33.5256 145.478L34.2074 143.049C35.0313 143.304 35.7557 143.734 36.3807 144.338C36.9986 144.941 37.4815 145.687 37.8296 146.575C38.1705 147.463 38.3409 148.461 38.3409 149.568Z"
          fill="#5603A9"
        />
        <path
          d="M33.2759 105.707L33.1859 108.052C32.784 108.071 32.3714 108.157 31.9481 108.311C31.5202 108.456 31.1224 108.715 30.7546 109.088C30.3869 109.462 30.09 109.996 29.8639 110.692C29.5545 111.644 29.5161 112.509 29.7489 113.287C29.977 114.056 30.4255 114.549 31.0942 114.766C31.6886 114.959 32.2283 114.895 32.7133 114.575C33.1982 114.255 33.7047 113.673 34.2329 112.829L35.5509 110.703C36.3407 109.421 37.1943 108.552 38.1117 108.096C39.0224 107.638 40.0215 107.585 41.109 107.938C42.0006 108.228 42.7142 108.744 43.2499 109.485C43.7878 110.22 44.1112 111.109 44.2202 112.153C44.3292 113.197 44.1873 114.323 43.7944 115.532C43.2787 117.119 42.5073 118.321 41.4803 119.138C40.4534 119.954 39.2329 120.285 37.819 120.132L37.9891 117.678C38.8969 117.734 39.6579 117.53 40.272 117.065C40.8883 116.593 41.3556 115.867 41.6738 114.888C42.0359 113.773 42.087 112.812 41.8271 112.003C41.5626 111.185 41.096 110.667 40.4273 110.45C39.8869 110.275 39.3729 110.317 38.8852 110.576C38.3908 110.834 37.9251 111.325 37.4882 112.049L36.0375 114.445C35.2367 115.761 34.373 116.638 33.4465 117.076C32.5154 117.505 31.5129 117.546 30.4389 117.197C29.5608 116.911 28.8641 116.412 28.3488 115.7C27.8358 114.98 27.5261 114.129 27.4198 113.146C27.3157 112.157 27.4414 111.115 27.797 110.02C28.2974 108.48 29.028 107.381 29.9888 106.722C30.9517 106.057 32.0475 105.719 33.2759 105.707Z"
          fill="#5603A9"
        />
        <path
          d="M52.6757 71.8051L51.8653 74.008C51.4773 73.9017 51.0582 73.8562 50.6081 73.8715C50.1565 73.877 49.6981 74.0004 49.2329 74.2419C48.7678 74.4833 48.3202 74.9 47.8902 75.4918C47.3016 76.302 46.9978 77.1128 46.9789 77.9242C46.9584 78.7258 47.2326 79.3332 47.8014 79.7465C48.307 80.1139 48.84 80.2201 49.4002 80.0653C49.9604 79.9105 50.6221 79.5133 51.3852 78.8738L53.2955 77.2594C54.4428 76.2845 55.5232 75.7218 56.5366 75.5715C57.5443 75.417 58.5107 75.6758 59.4358 76.3479C60.1943 76.8989 60.7136 77.6099 60.9939 78.4807C61.2784 79.3458 61.3112 80.2914 61.0924 81.3176C60.8736 82.3438 60.3906 83.3711 59.6433 84.3996C58.6623 85.7499 57.5573 86.6546 56.3283 87.1136C55.0993 87.5727 53.8362 87.5109 52.5388 86.9282L53.4588 84.647C54.3049 84.9807 55.0918 85.0214 55.8196 84.7688C56.5516 84.5105 57.2202 83.9648 57.8255 83.1316C58.5144 82.1836 58.8601 81.2847 58.8629 80.4352C58.864 79.5757 58.5802 78.9393 58.0113 78.526C57.5517 78.192 57.0498 78.0732 56.5057 78.1696C55.9559 78.2617 55.3613 78.5847 54.7219 79.1385L52.6018 80.9692C51.4336 81.9728 50.3413 82.5399 49.3247 82.6704C48.3065 82.791 47.3406 82.5194 46.427 81.8557C45.6801 81.313 45.1717 80.6232 44.9018 79.7863C44.6362 78.9436 44.6046 78.0384 44.8073 77.0708C45.0141 76.0973 45.4557 75.1452 46.132 74.2144C47.0838 72.9043 48.1184 72.0845 49.2356 71.755C50.3571 71.4198 51.5038 71.4365 52.6757 71.8051Z"
          fill="#5603A9"
        />
        <path
          d="M84.7716 59.162C84.3464 59.4709 83.8709 59.5838 83.3451 59.5005C82.8194 59.4172 82.402 59.163 82.0931 58.7378C81.7842 58.3126 81.6713 57.8371 81.7546 57.3113C81.8379 56.7855 82.0921 56.3682 82.5173 56.0593C82.9425 55.7503 83.418 55.6375 83.9438 55.7208C84.4696 55.8041 84.8869 56.0583 85.1958 56.4835C85.4004 56.765 85.5164 57.0758 85.5439 57.4157C85.5772 57.7515 85.5282 58.0768 85.397 58.3916C85.2674 58.6965 85.0589 58.9533 84.7716 59.162Z"
          fill="#5603A9"
        />
        <path
          d="M117 119L181 183M181 183L133 183M181 183L181 135"
          stroke="#5603A9"
          strokeWidth="8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_2001_8486">
          <rect
            width="300"
            height="300"
            fill="white"
            transform="matrix(0 1 -1 0 300 0)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default CircleText;
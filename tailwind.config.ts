import type { Config } from 'tailwindcss';
import { fontFamily } from 'tailwindcss/defaultTheme';
import plugin from 'tailwindcss/plugin';

export default {
  content: [
    './src/**/*.{astro,html,js,jsx,md,svelte,ts,tsx,vue}',
    '!./src/pages/og-image/[slug].png.ts',
  ],
  corePlugins: {
    // disable some core plugins as they are included in the css, even when unused
    borderOpacity: false,
    fontVariantNumeric: false,
    ringOffsetColor: false,
    ringOffsetWidth: false,
    scrollSnapType: false,
    textOpacity: false,
    touchAction: false,
  },
  darkMode: ['class', '[data-theme="dark"]'],
  plugins: [
    require('@tailwindcss/typography'),
    plugin(({ addComponents }) => {
      addComponents({
        '.citrus-link': {
          '&:hover': {
            '@apply underline underline-offset-2': {},
          },
          '@apply no-underline': {},
        },
        '.title': {
          '@apply font-semibold text-accent-base': {},
        },
        '.data-footnote-backref': {
          '&:hover': {
            '@apply no-underline brightness-110': {},
          },
          '@apply inline-flex bg-accent-two text-bgColor text-xs h-4 w-4 rounded-sm items-center justify-center':
            {},
        },
      });
    }),
  ],

  theme: {
    extend: {
      screens: {
        xs: '320px', // Add xs size
        // xl: '1200px',
      },
      maxWidth: {
        lg: '32rem', // default 32rem (512px)
        xl: '36rem', // default 36rem (576px)
        '2xl': '42rem', // default 42rem (672px)
        '3xl': '48rem', // default 48rem (768px)
        '4xl': '54rem', // !!! // default 56rem (896px)
        '5xl': '64rem', // default 64rem (1024px)
        '6xl': '76rem', // !!! // default 72rem (1152px)
      },
      colors: {
        color: {
          950: 'var(--theme-color-950)',
          900: 'var(--theme-color-900)',
          850: 'var(--theme-color-850)',
          800: 'var(--theme-color-800)',
          750: 'var(--theme-color-750)',
          700: 'var(--theme-color-700)',
          650: 'var(--theme-color-650)',
          600: 'var(--theme-color-600)',
          550: 'var(--theme-color-550)',
          500: 'var(--theme-color-500)',
          450: 'var(--theme-color-450)',
          400: 'var(--theme-color-400)',
          350: 'var(--theme-color-350)',
          300: 'var(--theme-color-300)',
          250: 'var(--theme-color-250)',
          200: 'var(--theme-color-200)',
          150: 'var(--theme-color-150)',
          100: 'var(--theme-color-100)',
          75: 'var(--theme-color-75)',
          50: 'var(--theme-color-50)',
        },
        bgColor: 'hsl(var(--theme-bg) / <alpha-value>)',
        textColor: 'var(--theme-text)',
        'accent-base': 'hsl(var(--theme-accent-base) / <alpha-value>)',
        'accent-one': 'hsl(var(--theme-accent-one) / <alpha-value>)',
        'accent-two': 'hsl(var(--theme-accent-two) / <alpha-value>)',
        link: 'hsl(var(--theme-link) / <alpha-value>)',
        accent: 'var(--theme-accent)',
        quote: 'hsl(var(--theme-quote) / <alpha-value>)',
        lightest: 'var(--theme-lightest)',
        lighter: 'var(--theme-lighter)',
        light: 'var(--theme-light)',
        'special-lightest': 'var(--theme-special-lightest)',
        'special-lighter': 'var(--theme-special-lighter)',
        'special-light': 'var(--theme-special-light)',
      },
      fontFamily: {
        // Add any custom fonts here
        sans: ['SFProRounded', ...fontFamily.sans],
        serif: ['CascadiaCode', ...fontFamily.serif],
      },
      transitionProperty: {
        height: 'height',
      },
      // @ts-expect-error
      // Remove above once tailwindcss exposes theme type
      typography: (theme) => ({
        DEFAULT: {
          css: {
            a: {
              '@apply citrus-link': '',
            },
            blockquote: {
              // "@apply !px-4 md:!px-6 !py-2 !border-s-[0.625rem] rounded-lg border-color-100 bg-color-75": "",
              '@apply font-normal text-quote border-l-0 px-4 [&>p:first-of-type]:mt-0 [&>p:last-of-type]:mb-0':
                '',
              'p::before': {
                "@apply leading-none font-serif font-medium relative content-['“'] text-2xl text-lightest top-[0.31125rem] md:top-[0.31125rem] -ms-4 me-0.5":
                  '',
              },
              'p::after': {
                "@apply leading-none font-serif font-medium relative content-['”'] text-2xl text-lightest top-[0.31125rem] md:top-[0.31125rem] ms-0":
                  '',
              },
            },

            // Стиль для блоков кода
            pre: {
              '@apply relative py-1.5': '',
            },

            code: {
              '@apply px-2 py-1 text-sm rounded-lg bg-color-150': '',
            },

            kbd: {
              '@apply text-textColor bg-special-lighter border-color-100 shadow-[0px_2.5px_0px_rgba(0,0,0,0.25)]':
                '',
            },
            hr: {
              '@apply border-t border-solid border-color-200': '',
            },
            strong: {
              fontWeight: '700',
            },
            sup: {
              '&:hover': {
                '@apply brightness-110': '',
              },
              '@apply bg-accent-two ms-0.5 px-1 rounded-sm text-bgColor': '',
              a: {
                '&:hover': {
                  '@apply no-underline': '',
                },
                '@apply text-bgColor': '',
              },
            },
            /*
            sup: {
              "@apply ms-0.5": "",
              a: {
                "&:after": {
                  content: "']'",
                },
                "&:before": {
                  content: "'['",
                },
                "&:hover": {
                  "@apply text-link no-underline bg-none": "",
                },
                "@apply bg-none": "",
              },
            },
            */

            /* Table */
            table: {
              '@apply overflow-hidden rounded-lg': '',
            },
            'tbody tr': {
              borderBottomWidth: 'none',
            },
            tfoot: {
              // borderTop: "1px dashed #666",
            },
            thead: {
              borderBottomWidth: 'none',
              '@apply bg-color-50': '',
            },
            'thead th': {
              // borderBottom: "1px #666",
              // fontWeight: "600",
              '@apply items-center min-h-8': '',
            },
            'td, th': {
              '@apply px-4 py-1': '', // Паддинг для всех ячеек таблицы
            },
            'th[align="center"], td[align="center"]': {
              'text-align': 'center',
            },
            'th[align="right"], td[align="right"]': {
              'text-align': 'right',
            },
            'th[align="left"], td[align="left"]': {
              'text-align': 'left',
            },
            // Чередующиеся фоны для строк таблицы
            'tbody tr:nth-child(odd)': {
              '@apply bg-color-100': '', // Белый фон для четных строк
            },
            'tbody tr:nth-child(even)': {
              '@apply bg-color-50': '', // Белый фон для четных строк
            },

            /* Admonitions/Aside */
            '.aside': {
              '--admonition-color': 'var(--tw-prose-quotes)',
              '@apply my-4 p-4 border-s-[0.625rem] rounded-lg border-[--admonition-color]':
                '',
              '.aside-title': {
                '@apply font-bold text-base flex items-center gap-2 my-0 capitalize text-[--admonition-color]':
                  '',
                '&:before': {
                  "@apply inline-block shrink-0 overflow-visible h-4 w-4 align-middle content-[''] bg-[--admonition-color]":
                    '',
                  'mask-size': 'contain',
                  'mask-position': 'center',
                  'mask-repeat': 'no-repeat',
                },
              },
              '.aside-content': {
                '> :last-child': {
                  '@apply mb-0': '',
                },
              },
            },
            '.aside.aside-note': {
              '--admonition-color': theme('colors.blue.400'),
              '@apply bg-blue-400/10': '',
              '.aside-title': {
                '&:before': {
                  maskImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' version='1.1' width='16' height='16' aria-hidden='true'%3E%3Cpath fill='var(--admonitions-color-tip)' d='M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm8-6.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13ZM6.5 7.75A.75.75 0 0 1 7.25 7h1a.75.75 0 0 1 .75.75v2.75h.25a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1 0-1.5h.25v-2h-.25a.75.75 0 0 1-.75-.75ZM8 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z'%3E%3C/path%3E%3C/svg%3E")`,
                },
              },
            },
            '.aside.aside-tip': {
              '--admonition-color': theme('colors.lime.500'),
              '@apply bg-lime-500/10': '',
              '.aside-title': {
                '&:before': {
                  maskImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' version='1.1' width='16' height='16' aria-hidden='true'%3E%3Cpath d='M8 1.5c-2.363 0-4 1.69-4 3.75 0 .984.424 1.625.984 2.304l.214.253c.223.264.47.556.673.848.284.411.537.896.621 1.49a.75.75 0 0 1-1.484.211c-.04-.282-.163-.547-.37-.847a8.456 8.456 0 0 0-.542-.68c-.084-.1-.173-.205-.268-.32C3.201 7.75 2.5 6.766 2.5 5.25 2.5 2.31 4.863 0 8 0s5.5 2.31 5.5 5.25c0 1.516-.701 2.5-1.328 3.259-.095.115-.184.22-.268.319-.207.245-.383.453-.541.681-.208.3-.33.565-.37.847a.751.751 0 0 1-1.485-.212c.084-.593.337-1.078.621-1.489.203-.292.45-.584.673-.848.075-.088.147-.173.213-.253.561-.679.985-1.32.985-2.304 0-2.06-1.637-3.75-4-3.75ZM5.75 12h4.5a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1 0-1.5ZM6 15.25a.75.75 0 0 1 .75-.75h2.5a.75.75 0 0 1 0 1.5h-2.5a.75.75 0 0 1-.75-.75Z'%3E%3C/path%3E%3C/svg%3E")`,
                },
              },
            },
            '.aside.aside-important': {
              '--admonition-color': theme('colors.purple.400'),
              '@apply bg-purple-400/10': '',
              '.aside-title': {
                '&:before': {
                  maskImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' version='1.1' width='16' height='16' aria-hidden='true'%3E%3Cpath d='M0 1.75C0 .784.784 0 1.75 0h12.5C15.216 0 16 .784 16 1.75v9.5A1.75 1.75 0 0 1 14.25 13H8.06l-2.573 2.573A1.458 1.458 0 0 1 3 14.543V13H1.75A1.75 1.75 0 0 1 0 11.25Zm1.75-.25a.25.25 0 0 0-.25.25v9.5c0 .138.112.25.25.25h2a.75.75 0 0 1 .75.75v2.19l2.72-2.72a.749.749 0 0 1 .53-.22h6.5a.25.25 0 0 0 .25-.25v-9.5a.25.25 0 0 0-.25-.25Zm7 2.25v2.5a.75.75 0 0 1-1.5 0v-2.5a.75.75 0 0 1 1.5 0ZM9 9a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z'%3E%3C/path%3E%3C/svg%3E")`,
                },
              },
            },
            '.aside.aside-warning': {
              '--admonition-color': theme('colors.orange.400'),
              '@apply bg-orange-400/10': '',
              '.aside-title': {
                '&:before': {
                  maskImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' version='1.1' width='16' height='16' aria-hidden='true'%3E%3Cpath d='M6.457 1.047c.659-1.234 2.427-1.234 3.086 0l6.082 11.378A1.75 1.75 0 0 1 14.082 15H1.918a1.75 1.75 0 0 1-1.543-2.575Zm1.763.707a.25.25 0 0 0-.44 0L1.698 13.132a.25.25 0 0 0 .22.368h12.164a.25.25 0 0 0 .22-.368Zm.53 3.996v2.5a.75.75 0 0 1-1.5 0v-2.5a.75.75 0 0 1 1.5 0ZM9 11a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z'%3E%3C/path%3E%3C/svg%3E")`,
                },
              },
            },
            '.aside.aside-caution': {
              '--admonition-color': theme('colors.red.500'),
              '@apply bg-red-500/10': '',
              '.aside-title': {
                '&:before': {
                  maskImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' version='1.1' width='16' height='16' aria-hidden='true'%3E%3Cpath d='M4.47.22A.749.749 0 0 1 5 0h6c.199 0 .389.079.53.22l4.25 4.25c.141.14.22.331.22.53v6a.749.749 0 0 1-.22.53l-4.25 4.25A.749.749 0 0 1 11 16H5a.749.749 0 0 1-.53-.22L.22 11.53A.749.749 0 0 1 0 11V5c0-.199.079-.389.22-.53Zm.84 1.28L1.5 5.31v5.38l3.81 3.81h5.38l3.81-3.81V5.31L10.69 1.5ZM8 4a.75.75 0 0 1 .75.75v3.5a.75.75 0 0 1-1.5 0v-3.5A.75.75 0 0 1 8 4Zm0 8a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z'%3E%3C/path%3E%3C/svg%3E")`,
                },
              },
            },
          },
        },
        citrus: {
          css: {
            '--tw-prose-body': theme('colors.textColor / 1'),
            '--tw-prose-bold': theme('colors.textColor / 1'),
            '--tw-prose-bullets': theme('colors.textColor / 1'),
            '--tw-prose-code': theme('colors.accent / 1'),
            '--tw-prose-headings': theme('colors.accent-base / 1'),
            // "--tw-prose-hr": "0.5px dashed #666",
            '--tw-prose-links': theme('colors.link / 1'),
            '--tw-prose-quotes': theme('colors.quote / 1'),
            // "--tw-prose-th-borders": "#666",
            'code::before': { content: 'none' },
            'code::after': { content: 'none' },
          },
        },
        sm: {
          css: {
            code: {
              fontSize: theme('fontSize.sm')[0],
              fontWeight: '400',
            },
          },
        },
      }),
    },
  },
  safelist: [
    'bg-color-950',
    'bg-color-900',
    'bg-color-850',
    'bg-color-800',
    'bg-color-750',
    'bg-color-700',
    'bg-color-650',
    'bg-color-600',
    'bg-color-550',
    'bg-color-500',
    'bg-color-450',
    'bg-color-400',
    'bg-color-350',
    'bg-color-300',
    'bg-color-250',
    'bg-color-200',
    'bg-color-150',
    'bg-color-100',
    'bg-color-75',
    'bg-color-50',
    'text-color-950',
    'text-color-900',
    'text-color-850',
    'text-color-800',
    'text-color-750',
    'text-color-700',
    'text-color-650',
    'text-color-600',
    'text-color-550',
    'text-color-500',
    'text-color-450',
    'text-color-400',
    'text-color-350',
    'text-color-300',
    'text-color-250',
    'text-color-200',
    'text-color-150',
    'text-color-100',
    'text-color-75',
    'text-color-50',
  ],
} satisfies Config;

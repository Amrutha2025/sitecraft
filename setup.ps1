Remove-Item -Recurse -Force c:\SiteCraft\frontend
npx -y create-next-app@latest frontend --typescript --tailwind --eslint --app --src-dir --import-alias "@/*" --use-npm
cd frontend
npm install framer-motion lucide-react zustand clsx tailwind-merge

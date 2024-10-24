import BottomBar from "./components/BottomBar";
import { TrackProvider } from "./context/AudioContext";
import "./globals.css";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <TrackProvider>
      <html lang="en">
        <body>
          {children}

          <BottomBar />
        </body>
      </html>
    </TrackProvider>
  );
}

import Closing from './components/Closing';
import Hero from './components/Hero';
import Reasons from './components/Reasons';
import RoseSection from './components/RoseSection';
import StoryTimeline from './components/StoryTimeline';
import Surprise from './components/Surprise';

function App() {
  return (
    <div className="font-sans text-gray-900 min-h-screen selection:bg-rose-200 selection:text-rose-900">
      <Hero />
      <RoseSection />
      <StoryTimeline />
      <Reasons />
      <Surprise />
      <Closing />
    </div>
  );
}

export default App;

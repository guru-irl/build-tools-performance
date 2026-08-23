import React from 'react';
const LABEL_24212 = 'component_24212';
export function Component24212({ value = 24212, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24212, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24212, 'data-value': derived.doubled }, children);
}
export default Component24212;

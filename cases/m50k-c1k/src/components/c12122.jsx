import React from 'react';
const LABEL_12122 = 'component_12122';
export function Component12122({ value = 12122, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12122, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12122, 'data-value': derived.doubled }, children);
}
export default Component12122;

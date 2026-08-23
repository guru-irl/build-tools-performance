import React from 'react';
const LABEL_12226 = 'component_12226';
export function Component12226({ value = 12226, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12226, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12226, 'data-value': derived.doubled }, children);
}
export default Component12226;

import React from 'react';
const LABEL_44100 = 'component_44100';
export function Component44100({ value = 44100, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44100, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44100, 'data-value': derived.doubled }, children);
}
export default Component44100;

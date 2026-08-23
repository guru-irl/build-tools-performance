import React from 'react';
const LABEL_22664 = 'component_22664';
export function Component22664({ value = 22664, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22664, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22664, 'data-value': derived.doubled }, children);
}
export default Component22664;

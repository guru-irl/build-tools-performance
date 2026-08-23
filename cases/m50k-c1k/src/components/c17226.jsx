import React from 'react';
const LABEL_17226 = 'component_17226';
export function Component17226({ value = 17226, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17226, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17226, 'data-value': derived.doubled }, children);
}
export default Component17226;

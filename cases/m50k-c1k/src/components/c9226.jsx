import React from 'react';
const LABEL_9226 = 'component_9226';
export function Component9226({ value = 9226, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9226, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9226, 'data-value': derived.doubled }, children);
}
export default Component9226;

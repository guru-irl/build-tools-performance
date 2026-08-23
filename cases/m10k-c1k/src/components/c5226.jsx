import React from 'react';
const LABEL_5226 = 'component_5226';
export function Component5226({ value = 5226, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5226, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5226, 'data-value': derived.doubled }, children);
}
export default Component5226;

import React from 'react';
const LABEL_24792 = 'component_24792';
export function Component24792({ value = 24792, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24792, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24792, 'data-value': derived.doubled }, children);
}
export default Component24792;

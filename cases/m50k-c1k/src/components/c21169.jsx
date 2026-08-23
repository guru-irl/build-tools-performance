import React from 'react';
const LABEL_21169 = 'component_21169';
export function Component21169({ value = 21169, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21169, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21169, 'data-value': derived.doubled }, children);
}
export default Component21169;

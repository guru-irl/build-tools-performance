import React from 'react';
const LABEL_23169 = 'component_23169';
export function Component23169({ value = 23169, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23169, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23169, 'data-value': derived.doubled }, children);
}
export default Component23169;

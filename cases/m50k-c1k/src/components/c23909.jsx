import React from 'react';
const LABEL_23909 = 'component_23909';
export function Component23909({ value = 23909, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23909, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23909, 'data-value': derived.doubled }, children);
}
export default Component23909;

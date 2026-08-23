import React from 'react';
const LABEL_36407 = 'component_36407';
export function Component36407({ value = 36407, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36407, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36407, 'data-value': derived.doubled }, children);
}
export default Component36407;

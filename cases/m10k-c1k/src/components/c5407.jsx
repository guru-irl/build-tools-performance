import React from 'react';
const LABEL_5407 = 'component_5407';
export function Component5407({ value = 5407, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5407, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5407, 'data-value': derived.doubled }, children);
}
export default Component5407;

import React from 'react';
const LABEL_5718 = 'component_5718';
export function Component5718({ value = 5718, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5718, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5718, 'data-value': derived.doubled }, children);
}
export default Component5718;

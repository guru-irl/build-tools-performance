import React from 'react';
const LABEL_10213 = 'component_10213';
export function Component10213({ value = 10213, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10213, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10213, 'data-value': derived.doubled }, children);
}
export default Component10213;

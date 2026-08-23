import React from 'react';
const LABEL_45606 = 'component_45606';
export function Component45606({ value = 45606, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45606, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45606, 'data-value': derived.doubled }, children);
}
export default Component45606;

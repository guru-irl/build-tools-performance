import React from 'react';
const LABEL_45488 = 'component_45488';
export function Component45488({ value = 45488, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45488, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45488, 'data-value': derived.doubled }, children);
}
export default Component45488;

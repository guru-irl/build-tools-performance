import React from 'react';
const LABEL_40725 = 'component_40725';
export function Component40725({ value = 40725, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40725, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40725, 'data-value': derived.doubled }, children);
}
export default Component40725;

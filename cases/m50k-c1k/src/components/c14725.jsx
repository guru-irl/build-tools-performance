import React from 'react';
const LABEL_14725 = 'component_14725';
export function Component14725({ value = 14725, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14725, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14725, 'data-value': derived.doubled }, children);
}
export default Component14725;

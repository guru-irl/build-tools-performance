import React from 'react';
const LABEL_21557 = 'component_21557';
export function Component21557({ value = 21557, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21557, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21557, 'data-value': derived.doubled }, children);
}
export default Component21557;

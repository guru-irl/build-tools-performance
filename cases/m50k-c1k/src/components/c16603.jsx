import React from 'react';
const LABEL_16603 = 'component_16603';
export function Component16603({ value = 16603, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16603, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16603, 'data-value': derived.doubled }, children);
}
export default Component16603;

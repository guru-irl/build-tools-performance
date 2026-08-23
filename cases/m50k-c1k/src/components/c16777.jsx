import React from 'react';
const LABEL_16777 = 'component_16777';
export function Component16777({ value = 16777, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16777, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16777, 'data-value': derived.doubled }, children);
}
export default Component16777;

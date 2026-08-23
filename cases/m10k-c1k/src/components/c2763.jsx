import React from 'react';
const LABEL_2763 = 'component_2763';
export function Component2763({ value = 2763, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2763, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2763, 'data-value': derived.doubled }, children);
}
export default Component2763;

import React from 'react';
const LABEL_10763 = 'component_10763';
export function Component10763({ value = 10763, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10763, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10763, 'data-value': derived.doubled }, children);
}
export default Component10763;

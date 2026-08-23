import React from 'react';
const LABEL_4552 = 'component_4552';
export function Component4552({ value = 4552, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4552, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4552, 'data-value': derived.doubled }, children);
}
export default Component4552;

import React from 'react';
const LABEL_2047 = 'component_2047';
export function Component2047({ value = 2047, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2047, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2047, 'data-value': derived.doubled }, children);
}
export default Component2047;

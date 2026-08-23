import React from 'react';
const LABEL_46029 = 'component_46029';
export function Component46029({ value = 46029, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46029, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46029, 'data-value': derived.doubled }, children);
}
export default Component46029;

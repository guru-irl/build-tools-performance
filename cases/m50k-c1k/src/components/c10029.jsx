import React from 'react';
const LABEL_10029 = 'component_10029';
export function Component10029({ value = 10029, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10029, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10029, 'data-value': derived.doubled }, children);
}
export default Component10029;

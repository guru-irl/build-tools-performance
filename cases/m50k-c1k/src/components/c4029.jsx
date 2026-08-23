import React from 'react';
const LABEL_4029 = 'component_4029';
export function Component4029({ value = 4029, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4029, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4029, 'data-value': derived.doubled }, children);
}
export default Component4029;

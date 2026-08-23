import React from 'react';
const LABEL_14029 = 'component_14029';
export function Component14029({ value = 14029, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14029, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14029, 'data-value': derived.doubled }, children);
}
export default Component14029;

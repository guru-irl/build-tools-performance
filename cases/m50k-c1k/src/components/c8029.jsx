import React from 'react';
const LABEL_8029 = 'component_8029';
export function Component8029({ value = 8029, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8029, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8029, 'data-value': derived.doubled }, children);
}
export default Component8029;

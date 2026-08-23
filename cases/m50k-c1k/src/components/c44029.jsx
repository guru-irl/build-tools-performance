import React from 'react';
const LABEL_44029 = 'component_44029';
export function Component44029({ value = 44029, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44029, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44029, 'data-value': derived.doubled }, children);
}
export default Component44029;

import React from 'react';
const LABEL_23029 = 'component_23029';
export function Component23029({ value = 23029, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23029, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23029, 'data-value': derived.doubled }, children);
}
export default Component23029;

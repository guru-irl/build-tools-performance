import React from 'react';
const LABEL_19029 = 'component_19029';
export function Component19029({ value = 19029, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19029, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19029, 'data-value': derived.doubled }, children);
}
export default Component19029;

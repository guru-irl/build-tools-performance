import React from 'react';
const LABEL_18029 = 'component_18029';
export function Component18029({ value = 18029, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18029, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18029, 'data-value': derived.doubled }, children);
}
export default Component18029;

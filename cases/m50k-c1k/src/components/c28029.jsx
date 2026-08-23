import React from 'react';
const LABEL_28029 = 'component_28029';
export function Component28029({ value = 28029, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28029, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28029, 'data-value': derived.doubled }, children);
}
export default Component28029;

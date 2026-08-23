import React from 'react';
const LABEL_5029 = 'component_5029';
export function Component5029({ value = 5029, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5029, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5029, 'data-value': derived.doubled }, children);
}
export default Component5029;

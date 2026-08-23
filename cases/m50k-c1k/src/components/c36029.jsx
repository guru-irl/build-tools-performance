import React from 'react';
const LABEL_36029 = 'component_36029';
export function Component36029({ value = 36029, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36029, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36029, 'data-value': derived.doubled }, children);
}
export default Component36029;

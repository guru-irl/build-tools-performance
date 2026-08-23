import React from 'react';
const LABEL_38029 = 'component_38029';
export function Component38029({ value = 38029, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38029, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38029, 'data-value': derived.doubled }, children);
}
export default Component38029;

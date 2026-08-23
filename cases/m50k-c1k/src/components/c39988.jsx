import React from 'react';
const LABEL_39988 = 'component_39988';
export function Component39988({ value = 39988, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39988, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39988, 'data-value': derived.doubled }, children);
}
export default Component39988;

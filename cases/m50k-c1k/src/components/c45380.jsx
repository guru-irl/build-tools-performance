import React from 'react';
const LABEL_45380 = 'component_45380';
export function Component45380({ value = 45380, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45380, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45380, 'data-value': derived.doubled }, children);
}
export default Component45380;

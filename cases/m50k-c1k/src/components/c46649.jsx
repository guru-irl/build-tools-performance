import React from 'react';
const LABEL_46649 = 'component_46649';
export function Component46649({ value = 46649, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46649, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46649, 'data-value': derived.doubled }, children);
}
export default Component46649;

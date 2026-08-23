import React from 'react';
const LABEL_45208 = 'component_45208';
export function Component45208({ value = 45208, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45208, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45208, 'data-value': derived.doubled }, children);
}
export default Component45208;

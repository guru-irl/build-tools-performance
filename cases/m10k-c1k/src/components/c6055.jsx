import React from 'react';
const LABEL_6055 = 'component_6055';
export function Component6055({ value = 6055, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6055, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6055, 'data-value': derived.doubled }, children);
}
export default Component6055;

import React from 'react';
const LABEL_45497 = 'component_45497';
export function Component45497({ value = 45497, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45497, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45497, 'data-value': derived.doubled }, children);
}
export default Component45497;

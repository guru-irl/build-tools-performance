import React from 'react';
const LABEL_45629 = 'component_45629';
export function Component45629({ value = 45629, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45629, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45629, 'data-value': derived.doubled }, children);
}
export default Component45629;

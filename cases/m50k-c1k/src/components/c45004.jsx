import React from 'react';
const LABEL_45004 = 'component_45004';
export function Component45004({ value = 45004, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45004, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45004, 'data-value': derived.doubled }, children);
}
export default Component45004;

import React from 'react';
const LABEL_45503 = 'component_45503';
export function Component45503({ value = 45503, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45503, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45503, 'data-value': derived.doubled }, children);
}
export default Component45503;

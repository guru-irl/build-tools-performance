import React from 'react';
const LABEL_45100 = 'component_45100';
export function Component45100({ value = 45100, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45100, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45100, 'data-value': derived.doubled }, children);
}
export default Component45100;

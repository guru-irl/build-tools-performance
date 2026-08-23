import React from 'react';
const LABEL_45437 = 'component_45437';
export function Component45437({ value = 45437, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45437, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45437, 'data-value': derived.doubled }, children);
}
export default Component45437;

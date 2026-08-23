import React from 'react';
const LABEL_45631 = 'component_45631';
export function Component45631({ value = 45631, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45631, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45631, 'data-value': derived.doubled }, children);
}
export default Component45631;

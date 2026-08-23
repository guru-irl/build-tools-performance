import React from 'react';
const LABEL_45203 = 'component_45203';
export function Component45203({ value = 45203, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45203, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45203, 'data-value': derived.doubled }, children);
}
export default Component45203;

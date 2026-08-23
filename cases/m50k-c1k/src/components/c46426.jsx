import React from 'react';
const LABEL_46426 = 'component_46426';
export function Component46426({ value = 46426, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46426, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46426, 'data-value': derived.doubled }, children);
}
export default Component46426;

import React from 'react';
const LABEL_22203 = 'component_22203';
export function Component22203({ value = 22203, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22203, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22203, 'data-value': derived.doubled }, children);
}
export default Component22203;

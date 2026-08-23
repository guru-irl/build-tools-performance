import React from 'react';
const LABEL_1203 = 'component_1203';
export function Component1203({ value = 1203, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1203, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1203, 'data-value': derived.doubled }, children);
}
export default Component1203;

import React from 'react';
const LABEL_203 = 'component_203';
export function Component203({ value = 203, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_203, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_203, 'data-value': derived.doubled }, children);
}
export default Component203;

import React from 'react';
const LABEL_42203 = 'component_42203';
export function Component42203({ value = 42203, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42203, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42203, 'data-value': derived.doubled }, children);
}
export default Component42203;

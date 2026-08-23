import React from 'react';
const LABEL_42133 = 'component_42133';
export function Component42133({ value = 42133, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42133, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42133, 'data-value': derived.doubled }, children);
}
export default Component42133;

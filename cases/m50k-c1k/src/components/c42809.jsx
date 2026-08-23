import React from 'react';
const LABEL_42809 = 'component_42809';
export function Component42809({ value = 42809, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42809, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42809, 'data-value': derived.doubled }, children);
}
export default Component42809;

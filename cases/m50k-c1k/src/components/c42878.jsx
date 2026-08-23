import React from 'react';
const LABEL_42878 = 'component_42878';
export function Component42878({ value = 42878, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42878, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42878, 'data-value': derived.doubled }, children);
}
export default Component42878;

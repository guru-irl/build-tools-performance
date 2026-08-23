import React from 'react';
const LABEL_31878 = 'component_31878';
export function Component31878({ value = 31878, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31878, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31878, 'data-value': derived.doubled }, children);
}
export default Component31878;

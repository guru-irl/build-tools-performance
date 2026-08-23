import React from 'react';
const LABEL_35878 = 'component_35878';
export function Component35878({ value = 35878, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35878, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35878, 'data-value': derived.doubled }, children);
}
export default Component35878;

import React from 'react';
const LABEL_37878 = 'component_37878';
export function Component37878({ value = 37878, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37878, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37878, 'data-value': derived.doubled }, children);
}
export default Component37878;

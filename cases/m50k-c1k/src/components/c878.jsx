import React from 'react';
const LABEL_878 = 'component_878';
export function Component878({ value = 878, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_878, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_878, 'data-value': derived.doubled }, children);
}
export default Component878;

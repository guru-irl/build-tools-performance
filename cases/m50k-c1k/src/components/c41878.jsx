import React from 'react';
const LABEL_41878 = 'component_41878';
export function Component41878({ value = 41878, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41878, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41878, 'data-value': derived.doubled }, children);
}
export default Component41878;

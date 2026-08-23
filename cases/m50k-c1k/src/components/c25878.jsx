import React from 'react';
const LABEL_25878 = 'component_25878';
export function Component25878({ value = 25878, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25878, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25878, 'data-value': derived.doubled }, children);
}
export default Component25878;

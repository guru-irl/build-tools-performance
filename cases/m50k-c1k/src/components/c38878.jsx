import React from 'react';
const LABEL_38878 = 'component_38878';
export function Component38878({ value = 38878, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38878, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38878, 'data-value': derived.doubled }, children);
}
export default Component38878;

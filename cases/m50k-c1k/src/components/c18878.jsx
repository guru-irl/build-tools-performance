import React from 'react';
const LABEL_18878 = 'component_18878';
export function Component18878({ value = 18878, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18878, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18878, 'data-value': derived.doubled }, children);
}
export default Component18878;

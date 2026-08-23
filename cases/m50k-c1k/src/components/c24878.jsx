import React from 'react';
const LABEL_24878 = 'component_24878';
export function Component24878({ value = 24878, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24878, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24878, 'data-value': derived.doubled }, children);
}
export default Component24878;

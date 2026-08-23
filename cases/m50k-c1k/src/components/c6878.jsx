import React from 'react';
const LABEL_6878 = 'component_6878';
export function Component6878({ value = 6878, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6878, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6878, 'data-value': derived.doubled }, children);
}
export default Component6878;

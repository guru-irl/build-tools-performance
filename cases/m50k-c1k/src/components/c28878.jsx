import React from 'react';
const LABEL_28878 = 'component_28878';
export function Component28878({ value = 28878, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28878, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28878, 'data-value': derived.doubled }, children);
}
export default Component28878;

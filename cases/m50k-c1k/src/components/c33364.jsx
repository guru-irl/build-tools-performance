import React from 'react';
const LABEL_33364 = 'component_33364';
export function Component33364({ value = 33364, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33364, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33364, 'data-value': derived.doubled }, children);
}
export default Component33364;

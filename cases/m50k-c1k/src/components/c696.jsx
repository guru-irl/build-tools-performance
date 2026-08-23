import React from 'react';
const LABEL_696 = 'component_696';
export function Component696({ value = 696, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_696, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_696, 'data-value': derived.doubled }, children);
}
export default Component696;

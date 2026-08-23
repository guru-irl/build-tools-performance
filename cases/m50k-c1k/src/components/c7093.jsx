import React from 'react';
const LABEL_7093 = 'component_7093';
export function Component7093({ value = 7093, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7093, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7093, 'data-value': derived.doubled }, children);
}
export default Component7093;

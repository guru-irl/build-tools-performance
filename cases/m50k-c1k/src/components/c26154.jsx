import React from 'react';
const LABEL_26154 = 'component_26154';
export function Component26154({ value = 26154, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26154, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26154, 'data-value': derived.doubled }, children);
}
export default Component26154;

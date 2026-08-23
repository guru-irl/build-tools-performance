import React from 'react';
const LABEL_26743 = 'component_26743';
export function Component26743({ value = 26743, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26743, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26743, 'data-value': derived.doubled }, children);
}
export default Component26743;

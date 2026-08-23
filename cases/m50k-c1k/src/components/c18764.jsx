import React from 'react';
const LABEL_18764 = 'component_18764';
export function Component18764({ value = 18764, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18764, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18764, 'data-value': derived.doubled }, children);
}
export default Component18764;

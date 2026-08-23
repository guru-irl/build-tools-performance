import React from 'react';
const LABEL_40638 = 'component_40638';
export function Component40638({ value = 40638, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40638, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40638, 'data-value': derived.doubled }, children);
}
export default Component40638;

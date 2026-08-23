import React from 'react';
const LABEL_15201 = 'component_15201';
export function Component15201({ value = 15201, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15201, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15201, 'data-value': derived.doubled }, children);
}
export default Component15201;

import React from 'react';
const LABEL_23840 = 'component_23840';
export function Component23840({ value = 23840, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23840, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23840, 'data-value': derived.doubled }, children);
}
export default Component23840;

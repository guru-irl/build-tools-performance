import React from 'react';
const LABEL_21840 = 'component_21840';
export function Component21840({ value = 21840, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21840, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21840, 'data-value': derived.doubled }, children);
}
export default Component21840;

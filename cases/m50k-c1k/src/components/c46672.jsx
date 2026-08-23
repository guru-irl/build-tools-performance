import React from 'react';
const LABEL_46672 = 'component_46672';
export function Component46672({ value = 46672, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46672, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46672, 'data-value': derived.doubled }, children);
}
export default Component46672;

import React from 'react';
const LABEL_22672 = 'component_22672';
export function Component22672({ value = 22672, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22672, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22672, 'data-value': derived.doubled }, children);
}
export default Component22672;

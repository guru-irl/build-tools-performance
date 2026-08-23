import React from 'react';
const LABEL_15609 = 'component_15609';
export function Component15609({ value = 15609, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15609, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15609, 'data-value': derived.doubled }, children);
}
export default Component15609;

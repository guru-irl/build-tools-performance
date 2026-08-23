import React from 'react';
const LABEL_23609 = 'component_23609';
export function Component23609({ value = 23609, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23609, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23609, 'data-value': derived.doubled }, children);
}
export default Component23609;

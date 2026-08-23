import React from 'react';
const LABEL_7609 = 'component_7609';
export function Component7609({ value = 7609, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7609, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7609, 'data-value': derived.doubled }, children);
}
export default Component7609;

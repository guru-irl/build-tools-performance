import React from 'react';
const LABEL_1609 = 'component_1609';
export function Component1609({ value = 1609, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1609, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1609, 'data-value': derived.doubled }, children);
}
export default Component1609;

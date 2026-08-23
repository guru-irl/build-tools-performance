import React from 'react';
const LABEL_22172 = 'component_22172';
export function Component22172({ value = 22172, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22172, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22172, 'data-value': derived.doubled }, children);
}
export default Component22172;

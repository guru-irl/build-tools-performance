import React from 'react';
const LABEL_6654 = 'component_6654';
export function Component6654({ value = 6654, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6654, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6654, 'data-value': derived.doubled }, children);
}
export default Component6654;

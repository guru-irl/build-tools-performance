import React from 'react';
const LABEL_29708 = 'component_29708';
export function Component29708({ value = 29708, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29708, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29708, 'data-value': derived.doubled }, children);
}
export default Component29708;

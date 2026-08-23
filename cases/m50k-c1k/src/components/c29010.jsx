import React from 'react';
const LABEL_29010 = 'component_29010';
export function Component29010({ value = 29010, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29010, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29010, 'data-value': derived.doubled }, children);
}
export default Component29010;

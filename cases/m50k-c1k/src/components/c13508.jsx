import React from 'react';
const LABEL_13508 = 'component_13508';
export function Component13508({ value = 13508, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13508, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13508, 'data-value': derived.doubled }, children);
}
export default Component13508;

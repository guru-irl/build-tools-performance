import React from 'react';
const LABEL_21010 = 'component_21010';
export function Component21010({ value = 21010, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21010, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21010, 'data-value': derived.doubled }, children);
}
export default Component21010;

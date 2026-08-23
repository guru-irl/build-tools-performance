import React from 'react';
const LABEL_21609 = 'component_21609';
export function Component21609({ value = 21609, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21609, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21609, 'data-value': derived.doubled }, children);
}
export default Component21609;

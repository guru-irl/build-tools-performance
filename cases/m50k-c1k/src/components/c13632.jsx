import React from 'react';
const LABEL_13632 = 'component_13632';
export function Component13632({ value = 13632, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13632, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13632, 'data-value': derived.doubled }, children);
}
export default Component13632;

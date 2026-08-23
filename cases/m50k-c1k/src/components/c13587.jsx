import React from 'react';
const LABEL_13587 = 'component_13587';
export function Component13587({ value = 13587, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13587, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13587, 'data-value': derived.doubled }, children);
}
export default Component13587;

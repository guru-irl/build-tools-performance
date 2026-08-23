import React from 'react';
const LABEL_13767 = 'component_13767';
export function Component13767({ value = 13767, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13767, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13767, 'data-value': derived.doubled }, children);
}
export default Component13767;

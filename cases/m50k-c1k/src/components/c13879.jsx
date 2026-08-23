import React from 'react';
const LABEL_13879 = 'component_13879';
export function Component13879({ value = 13879, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13879, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13879, 'data-value': derived.doubled }, children);
}
export default Component13879;

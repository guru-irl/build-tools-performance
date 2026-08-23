import React from 'react';
const LABEL_41100 = 'component_41100';
export function Component41100({ value = 41100, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41100, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41100, 'data-value': derived.doubled }, children);
}
export default Component41100;

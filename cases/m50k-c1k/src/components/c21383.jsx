import React from 'react';
const LABEL_21383 = 'component_21383';
export function Component21383({ value = 21383, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21383, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21383, 'data-value': derived.doubled }, children);
}
export default Component21383;

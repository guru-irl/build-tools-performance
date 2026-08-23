import React from 'react';
const LABEL_29240 = 'component_29240';
export function Component29240({ value = 29240, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29240, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29240, 'data-value': derived.doubled }, children);
}
export default Component29240;

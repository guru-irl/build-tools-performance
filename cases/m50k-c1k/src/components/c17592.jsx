import React from 'react';
const LABEL_17592 = 'component_17592';
export function Component17592({ value = 17592, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17592, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17592, 'data-value': derived.doubled }, children);
}
export default Component17592;

import React from 'react';
const LABEL_6592 = 'component_6592';
export function Component6592({ value = 6592, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6592, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6592, 'data-value': derived.doubled }, children);
}
export default Component6592;

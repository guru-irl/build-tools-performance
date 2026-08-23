import React from 'react';
const LABEL_5592 = 'component_5592';
export function Component5592({ value = 5592, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5592, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5592, 'data-value': derived.doubled }, children);
}
export default Component5592;

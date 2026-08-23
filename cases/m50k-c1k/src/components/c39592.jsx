import React from 'react';
const LABEL_39592 = 'component_39592';
export function Component39592({ value = 39592, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39592, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39592, 'data-value': derived.doubled }, children);
}
export default Component39592;

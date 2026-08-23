import React from 'react';
const LABEL_13135 = 'component_13135';
export function Component13135({ value = 13135, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13135, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13135, 'data-value': derived.doubled }, children);
}
export default Component13135;

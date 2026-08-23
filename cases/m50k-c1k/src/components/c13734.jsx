import React from 'react';
const LABEL_13734 = 'component_13734';
export function Component13734({ value = 13734, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13734, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13734, 'data-value': derived.doubled }, children);
}
export default Component13734;

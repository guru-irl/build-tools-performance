import React from 'react';
const LABEL_3084 = 'component_3084';
export function Component3084({ value = 3084, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3084, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3084, 'data-value': derived.doubled }, children);
}
export default Component3084;

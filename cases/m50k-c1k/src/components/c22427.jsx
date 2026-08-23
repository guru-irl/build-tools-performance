import React from 'react';
const LABEL_22427 = 'component_22427';
export function Component22427({ value = 22427, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22427, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22427, 'data-value': derived.doubled }, children);
}
export default Component22427;

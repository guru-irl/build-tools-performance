import React from 'react';
const LABEL_13621 = 'component_13621';
export function Component13621({ value = 13621, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13621, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13621, 'data-value': derived.doubled }, children);
}
export default Component13621;

import React from 'react';
const LABEL_13318 = 'component_13318';
export function Component13318({ value = 13318, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13318, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13318, 'data-value': derived.doubled }, children);
}
export default Component13318;

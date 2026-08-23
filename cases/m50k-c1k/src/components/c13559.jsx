import React from 'react';
const LABEL_13559 = 'component_13559';
export function Component13559({ value = 13559, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13559, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13559, 'data-value': derived.doubled }, children);
}
export default Component13559;

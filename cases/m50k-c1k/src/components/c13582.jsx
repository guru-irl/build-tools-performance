import React from 'react';
const LABEL_13582 = 'component_13582';
export function Component13582({ value = 13582, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13582, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13582, 'data-value': derived.doubled }, children);
}
export default Component13582;

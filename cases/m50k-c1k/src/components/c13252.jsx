import React from 'react';
const LABEL_13252 = 'component_13252';
export function Component13252({ value = 13252, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13252, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13252, 'data-value': derived.doubled }, children);
}
export default Component13252;

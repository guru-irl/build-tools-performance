import React from 'react';
const LABEL_13409 = 'component_13409';
export function Component13409({ value = 13409, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13409, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13409, 'data-value': derived.doubled }, children);
}
export default Component13409;

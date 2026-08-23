import React from 'react';
const LABEL_29127 = 'component_29127';
export function Component29127({ value = 29127, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29127, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29127, 'data-value': derived.doubled }, children);
}
export default Component29127;

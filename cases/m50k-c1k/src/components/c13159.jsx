import React from 'react';
const LABEL_13159 = 'component_13159';
export function Component13159({ value = 13159, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13159, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13159, 'data-value': derived.doubled }, children);
}
export default Component13159;

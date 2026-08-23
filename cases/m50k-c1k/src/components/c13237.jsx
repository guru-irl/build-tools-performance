import React from 'react';
const LABEL_13237 = 'component_13237';
export function Component13237({ value = 13237, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13237, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13237, 'data-value': derived.doubled }, children);
}
export default Component13237;

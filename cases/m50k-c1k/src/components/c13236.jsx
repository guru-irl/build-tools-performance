import React from 'react';
const LABEL_13236 = 'component_13236';
export function Component13236({ value = 13236, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13236, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13236, 'data-value': derived.doubled }, children);
}
export default Component13236;

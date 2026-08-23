import React from 'react';
const LABEL_13127 = 'component_13127';
export function Component13127({ value = 13127, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13127, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13127, 'data-value': derived.doubled }, children);
}
export default Component13127;

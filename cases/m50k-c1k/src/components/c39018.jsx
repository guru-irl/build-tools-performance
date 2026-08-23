import React from 'react';
const LABEL_39018 = 'component_39018';
export function Component39018({ value = 39018, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39018, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39018, 'data-value': derived.doubled }, children);
}
export default Component39018;

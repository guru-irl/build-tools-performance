import React from 'react';
const LABEL_39632 = 'component_39632';
export function Component39632({ value = 39632, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39632, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39632, 'data-value': derived.doubled }, children);
}
export default Component39632;

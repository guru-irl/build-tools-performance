import React from 'react';
const LABEL_39385 = 'component_39385';
export function Component39385({ value = 39385, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39385, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39385, 'data-value': derived.doubled }, children);
}
export default Component39385;

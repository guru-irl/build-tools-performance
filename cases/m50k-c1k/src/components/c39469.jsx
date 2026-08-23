import React from 'react';
const LABEL_39469 = 'component_39469';
export function Component39469({ value = 39469, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39469, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39469, 'data-value': derived.doubled }, children);
}
export default Component39469;

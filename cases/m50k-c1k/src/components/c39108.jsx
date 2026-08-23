import React from 'react';
const LABEL_39108 = 'component_39108';
export function Component39108({ value = 39108, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39108, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39108, 'data-value': derived.doubled }, children);
}
export default Component39108;

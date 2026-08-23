import React from 'react';
const LABEL_39746 = 'component_39746';
export function Component39746({ value = 39746, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39746, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39746, 'data-value': derived.doubled }, children);
}
export default Component39746;

import React from 'react';
const LABEL_39490 = 'component_39490';
export function Component39490({ value = 39490, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39490, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39490, 'data-value': derived.doubled }, children);
}
export default Component39490;

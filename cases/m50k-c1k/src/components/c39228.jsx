import React from 'react';
const LABEL_39228 = 'component_39228';
export function Component39228({ value = 39228, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39228, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39228, 'data-value': derived.doubled }, children);
}
export default Component39228;

import React from 'react';
const LABEL_16174 = 'component_16174';
export function Component16174({ value = 16174, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16174, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16174, 'data-value': derived.doubled }, children);
}
export default Component16174;

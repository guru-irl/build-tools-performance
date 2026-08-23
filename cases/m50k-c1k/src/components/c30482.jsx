import React from 'react';
const LABEL_30482 = 'component_30482';
export function Component30482({ value = 30482, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30482, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30482, 'data-value': derived.doubled }, children);
}
export default Component30482;

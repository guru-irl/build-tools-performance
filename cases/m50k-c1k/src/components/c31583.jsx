import React from 'react';
const LABEL_31583 = 'component_31583';
export function Component31583({ value = 31583, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31583, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31583, 'data-value': derived.doubled }, children);
}
export default Component31583;

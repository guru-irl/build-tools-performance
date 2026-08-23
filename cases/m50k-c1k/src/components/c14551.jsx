import React from 'react';
const LABEL_14551 = 'component_14551';
export function Component14551({ value = 14551, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14551, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14551, 'data-value': derived.doubled }, children);
}
export default Component14551;

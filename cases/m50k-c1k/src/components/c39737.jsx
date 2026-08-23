import React from 'react';
const LABEL_39737 = 'component_39737';
export function Component39737({ value = 39737, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39737, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39737, 'data-value': derived.doubled }, children);
}
export default Component39737;

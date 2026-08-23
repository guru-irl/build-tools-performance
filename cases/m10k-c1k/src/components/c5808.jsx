import React from 'react';
const LABEL_5808 = 'component_5808';
export function Component5808({ value = 5808, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5808, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5808, 'data-value': derived.doubled }, children);
}
export default Component5808;

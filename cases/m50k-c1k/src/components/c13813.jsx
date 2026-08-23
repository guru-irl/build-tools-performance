import React from 'react';
const LABEL_13813 = 'component_13813';
export function Component13813({ value = 13813, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13813, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13813, 'data-value': derived.doubled }, children);
}
export default Component13813;

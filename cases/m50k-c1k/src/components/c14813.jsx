import React from 'react';
const LABEL_14813 = 'component_14813';
export function Component14813({ value = 14813, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14813, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14813, 'data-value': derived.doubled }, children);
}
export default Component14813;

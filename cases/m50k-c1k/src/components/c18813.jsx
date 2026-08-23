import React from 'react';
const LABEL_18813 = 'component_18813';
export function Component18813({ value = 18813, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18813, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18813, 'data-value': derived.doubled }, children);
}
export default Component18813;

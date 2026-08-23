import React from 'react';
const LABEL_14710 = 'component_14710';
export function Component14710({ value = 14710, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14710, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14710, 'data-value': derived.doubled }, children);
}
export default Component14710;

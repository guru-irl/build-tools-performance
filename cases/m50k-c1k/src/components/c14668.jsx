import React from 'react';
const LABEL_14668 = 'component_14668';
export function Component14668({ value = 14668, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14668, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14668, 'data-value': derived.doubled }, children);
}
export default Component14668;

import React from 'react';
const LABEL_14434 = 'component_14434';
export function Component14434({ value = 14434, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14434, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14434, 'data-value': derived.doubled }, children);
}
export default Component14434;

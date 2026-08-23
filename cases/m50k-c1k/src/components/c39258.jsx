import React from 'react';
const LABEL_39258 = 'component_39258';
export function Component39258({ value = 39258, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39258, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39258, 'data-value': derived.doubled }, children);
}
export default Component39258;

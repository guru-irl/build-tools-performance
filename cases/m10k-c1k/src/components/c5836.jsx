import React from 'react';
const LABEL_5836 = 'component_5836';
export function Component5836({ value = 5836, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5836, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5836, 'data-value': derived.doubled }, children);
}
export default Component5836;

import React from 'react';
const LABEL_24836 = 'component_24836';
export function Component24836({ value = 24836, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24836, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24836, 'data-value': derived.doubled }, children);
}
export default Component24836;

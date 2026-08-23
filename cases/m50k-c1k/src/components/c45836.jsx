import React from 'react';
const LABEL_45836 = 'component_45836';
export function Component45836({ value = 45836, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45836, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45836, 'data-value': derived.doubled }, children);
}
export default Component45836;

import React from 'react';
const LABEL_40836 = 'component_40836';
export function Component40836({ value = 40836, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40836, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40836, 'data-value': derived.doubled }, children);
}
export default Component40836;

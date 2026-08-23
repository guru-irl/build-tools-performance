import React from 'react';
const LABEL_4836 = 'component_4836';
export function Component4836({ value = 4836, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4836, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4836, 'data-value': derived.doubled }, children);
}
export default Component4836;

import React from 'react';
const LABEL_39836 = 'component_39836';
export function Component39836({ value = 39836, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39836, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39836, 'data-value': derived.doubled }, children);
}
export default Component39836;

import React from 'react';
const LABEL_18836 = 'component_18836';
export function Component18836({ value = 18836, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18836, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18836, 'data-value': derived.doubled }, children);
}
export default Component18836;

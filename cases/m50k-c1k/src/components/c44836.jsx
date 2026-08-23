import React from 'react';
const LABEL_44836 = 'component_44836';
export function Component44836({ value = 44836, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44836, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44836, 'data-value': derived.doubled }, children);
}
export default Component44836;

import React from 'react';
const LABEL_37836 = 'component_37836';
export function Component37836({ value = 37836, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37836, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37836, 'data-value': derived.doubled }, children);
}
export default Component37836;

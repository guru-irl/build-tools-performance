import React from 'react';
const LABEL_20836 = 'component_20836';
export function Component20836({ value = 20836, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20836, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20836, 'data-value': derived.doubled }, children);
}
export default Component20836;

import React from 'react';
const LABEL_8836 = 'component_8836';
export function Component8836({ value = 8836, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8836, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8836, 'data-value': derived.doubled }, children);
}
export default Component8836;

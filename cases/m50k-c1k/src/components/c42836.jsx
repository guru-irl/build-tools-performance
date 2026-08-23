import React from 'react';
const LABEL_42836 = 'component_42836';
export function Component42836({ value = 42836, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42836, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42836, 'data-value': derived.doubled }, children);
}
export default Component42836;

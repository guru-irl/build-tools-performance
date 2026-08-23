import React from 'react';
const LABEL_18673 = 'component_18673';
export function Component18673({ value = 18673, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18673, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18673, 'data-value': derived.doubled }, children);
}
export default Component18673;

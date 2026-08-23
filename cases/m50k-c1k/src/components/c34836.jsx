import React from 'react';
const LABEL_34836 = 'component_34836';
export function Component34836({ value = 34836, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34836, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34836, 'data-value': derived.doubled }, children);
}
export default Component34836;

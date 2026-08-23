import React from 'react';
const LABEL_31836 = 'component_31836';
export function Component31836({ value = 31836, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31836, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31836, 'data-value': derived.doubled }, children);
}
export default Component31836;

import React from 'react';
const LABEL_7836 = 'component_7836';
export function Component7836({ value = 7836, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7836, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7836, 'data-value': derived.doubled }, children);
}
export default Component7836;

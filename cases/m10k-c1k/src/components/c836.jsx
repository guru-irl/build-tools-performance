import React from 'react';
const LABEL_836 = 'component_836';
export function Component836({ value = 836, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_836, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_836, 'data-value': derived.doubled }, children);
}
export default Component836;

import React from 'react';
const LABEL_39395 = 'component_39395';
export function Component39395({ value = 39395, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39395, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39395, 'data-value': derived.doubled }, children);
}
export default Component39395;

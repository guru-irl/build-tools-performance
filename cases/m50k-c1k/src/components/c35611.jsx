import React from 'react';
const LABEL_35611 = 'component_35611';
export function Component35611({ value = 35611, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35611, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35611, 'data-value': derived.doubled }, children);
}
export default Component35611;

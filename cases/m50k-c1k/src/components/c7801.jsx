import React from 'react';
const LABEL_7801 = 'component_7801';
export function Component7801({ value = 7801, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7801, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7801, 'data-value': derived.doubled }, children);
}
export default Component7801;

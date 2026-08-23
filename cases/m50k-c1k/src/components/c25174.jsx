import React from 'react';
const LABEL_25174 = 'component_25174';
export function Component25174({ value = 25174, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25174, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25174, 'data-value': derived.doubled }, children);
}
export default Component25174;

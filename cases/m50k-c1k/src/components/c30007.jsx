import React from 'react';
const LABEL_30007 = 'component_30007';
export function Component30007({ value = 30007, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30007, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30007, 'data-value': derived.doubled }, children);
}
export default Component30007;

import React from 'react';
const LABEL_30178 = 'component_30178';
export function Component30178({ value = 30178, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30178, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30178, 'data-value': derived.doubled }, children);
}
export default Component30178;

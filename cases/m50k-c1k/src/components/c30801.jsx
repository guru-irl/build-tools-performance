import React from 'react';
const LABEL_30801 = 'component_30801';
export function Component30801({ value = 30801, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30801, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30801, 'data-value': derived.doubled }, children);
}
export default Component30801;

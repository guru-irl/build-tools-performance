import React from 'react';
const LABEL_30622 = 'component_30622';
export function Component30622({ value = 30622, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30622, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30622, 'data-value': derived.doubled }, children);
}
export default Component30622;

import React from 'react';
const LABEL_30651 = 'component_30651';
export function Component30651({ value = 30651, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30651, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30651, 'data-value': derived.doubled }, children);
}
export default Component30651;

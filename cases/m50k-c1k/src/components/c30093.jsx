import React from 'react';
const LABEL_30093 = 'component_30093';
export function Component30093({ value = 30093, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30093, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30093, 'data-value': derived.doubled }, children);
}
export default Component30093;

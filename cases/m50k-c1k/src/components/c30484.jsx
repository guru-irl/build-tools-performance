import React from 'react';
const LABEL_30484 = 'component_30484';
export function Component30484({ value = 30484, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30484, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30484, 'data-value': derived.doubled }, children);
}
export default Component30484;

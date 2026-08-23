import React from 'react';
const LABEL_30961 = 'component_30961';
export function Component30961({ value = 30961, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30961, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30961, 'data-value': derived.doubled }, children);
}
export default Component30961;

import React from 'react';
const LABEL_30434 = 'component_30434';
export function Component30434({ value = 30434, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30434, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30434, 'data-value': derived.doubled }, children);
}
export default Component30434;

import React from 'react';
const LABEL_30441 = 'component_30441';
export function Component30441({ value = 30441, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30441, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30441, 'data-value': derived.doubled }, children);
}
export default Component30441;

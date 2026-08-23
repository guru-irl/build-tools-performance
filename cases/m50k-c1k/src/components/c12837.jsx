import React from 'react';
const LABEL_12837 = 'component_12837';
export function Component12837({ value = 12837, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12837, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12837, 'data-value': derived.doubled }, children);
}
export default Component12837;

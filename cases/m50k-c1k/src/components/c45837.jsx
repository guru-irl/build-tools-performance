import React from 'react';
const LABEL_45837 = 'component_45837';
export function Component45837({ value = 45837, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45837, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45837, 'data-value': derived.doubled }, children);
}
export default Component45837;

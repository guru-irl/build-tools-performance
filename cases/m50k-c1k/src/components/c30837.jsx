import React from 'react';
const LABEL_30837 = 'component_30837';
export function Component30837({ value = 30837, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30837, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30837, 'data-value': derived.doubled }, children);
}
export default Component30837;

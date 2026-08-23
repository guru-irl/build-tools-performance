import React from 'react';
const LABEL_30879 = 'component_30879';
export function Component30879({ value = 30879, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30879, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30879, 'data-value': derived.doubled }, children);
}
export default Component30879;

import React from 'react';
const LABEL_30003 = 'component_30003';
export function Component30003({ value = 30003, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30003, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30003, 'data-value': derived.doubled }, children);
}
export default Component30003;

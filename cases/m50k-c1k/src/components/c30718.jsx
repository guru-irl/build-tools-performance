import React from 'react';
const LABEL_30718 = 'component_30718';
export function Component30718({ value = 30718, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30718, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30718, 'data-value': derived.doubled }, children);
}
export default Component30718;

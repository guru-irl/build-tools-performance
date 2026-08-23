import React from 'react';
const LABEL_30907 = 'component_30907';
export function Component30907({ value = 30907, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30907, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30907, 'data-value': derived.doubled }, children);
}
export default Component30907;

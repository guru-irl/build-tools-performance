import React from 'react';
const LABEL_30514 = 'component_30514';
export function Component30514({ value = 30514, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30514, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30514, 'data-value': derived.doubled }, children);
}
export default Component30514;

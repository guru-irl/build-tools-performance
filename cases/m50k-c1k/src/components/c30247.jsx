import React from 'react';
const LABEL_30247 = 'component_30247';
export function Component30247({ value = 30247, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30247, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30247, 'data-value': derived.doubled }, children);
}
export default Component30247;

import React from 'react';
const LABEL_30371 = 'component_30371';
export function Component30371({ value = 30371, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30371, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30371, 'data-value': derived.doubled }, children);
}
export default Component30371;

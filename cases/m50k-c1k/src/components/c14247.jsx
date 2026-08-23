import React from 'react';
const LABEL_14247 = 'component_14247';
export function Component14247({ value = 14247, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14247, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14247, 'data-value': derived.doubled }, children);
}
export default Component14247;

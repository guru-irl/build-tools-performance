import React from 'react';
const LABEL_40247 = 'component_40247';
export function Component40247({ value = 40247, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40247, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40247, 'data-value': derived.doubled }, children);
}
export default Component40247;

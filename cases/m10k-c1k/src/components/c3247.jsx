import React from 'react';
const LABEL_3247 = 'component_3247';
export function Component3247({ value = 3247, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3247, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3247, 'data-value': derived.doubled }, children);
}
export default Component3247;

import React from 'react';
const LABEL_3857 = 'component_3857';
export function Component3857({ value = 3857, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3857, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3857, 'data-value': derived.doubled }, children);
}
export default Component3857;

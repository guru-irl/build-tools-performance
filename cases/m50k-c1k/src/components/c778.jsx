import React from 'react';
const LABEL_778 = 'component_778';
export function Component778({ value = 778, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_778, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_778, 'data-value': derived.doubled }, children);
}
export default Component778;

import React from 'react';
const LABEL_87 = 'component_87';
export function Component87({ value = 87, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_87, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_87, 'data-value': derived.doubled }, children);
}
export default Component87;

import React from 'react';
const LABEL_21325 = 'component_21325';
export function Component21325({ value = 21325, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21325, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21325, 'data-value': derived.doubled }, children);
}
export default Component21325;

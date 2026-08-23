import React from 'react';
const LABEL_25160 = 'component_25160';
export function Component25160({ value = 25160, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25160, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25160, 'data-value': derived.doubled }, children);
}
export default Component25160;

import React from 'react';
const LABEL_24070 = 'component_24070';
export function Component24070({ value = 24070, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24070, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24070, 'data-value': derived.doubled }, children);
}
export default Component24070;

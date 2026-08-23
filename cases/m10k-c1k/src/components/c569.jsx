import React from 'react';
const LABEL_569 = 'component_569';
export function Component569({ value = 569, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_569, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_569, 'data-value': derived.doubled }, children);
}
export default Component569;

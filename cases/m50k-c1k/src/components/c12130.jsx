import React from 'react';
const LABEL_12130 = 'component_12130';
export function Component12130({ value = 12130, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12130, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12130, 'data-value': derived.doubled }, children);
}
export default Component12130;

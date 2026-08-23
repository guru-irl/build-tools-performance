import React from 'react';
const LABEL_12165 = 'component_12165';
export function Component12165({ value = 12165, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12165, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12165, 'data-value': derived.doubled }, children);
}
export default Component12165;

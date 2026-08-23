import React from 'react';
const LABEL_12475 = 'component_12475';
export function Component12475({ value = 12475, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12475, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12475, 'data-value': derived.doubled }, children);
}
export default Component12475;

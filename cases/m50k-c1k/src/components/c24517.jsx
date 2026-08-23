import React from 'react';
const LABEL_24517 = 'component_24517';
export function Component24517({ value = 24517, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24517, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24517, 'data-value': derived.doubled }, children);
}
export default Component24517;

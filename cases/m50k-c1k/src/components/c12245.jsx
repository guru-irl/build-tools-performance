import React from 'react';
const LABEL_12245 = 'component_12245';
export function Component12245({ value = 12245, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12245, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12245, 'data-value': derived.doubled }, children);
}
export default Component12245;

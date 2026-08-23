import React from 'react';
const LABEL_12016 = 'component_12016';
export function Component12016({ value = 12016, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12016, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12016, 'data-value': derived.doubled }, children);
}
export default Component12016;

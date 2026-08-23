import React from 'react';
const LABEL_24300 = 'component_24300';
export function Component24300({ value = 24300, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24300, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24300, 'data-value': derived.doubled }, children);
}
export default Component24300;

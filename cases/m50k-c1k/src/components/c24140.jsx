import React from 'react';
const LABEL_24140 = 'component_24140';
export function Component24140({ value = 24140, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24140, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24140, 'data-value': derived.doubled }, children);
}
export default Component24140;

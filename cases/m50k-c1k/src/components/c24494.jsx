import React from 'react';
const LABEL_24494 = 'component_24494';
export function Component24494({ value = 24494, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24494, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24494, 'data-value': derived.doubled }, children);
}
export default Component24494;

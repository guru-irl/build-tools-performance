import React from 'react';
const LABEL_21190 = 'component_21190';
export function Component21190({ value = 21190, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21190, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21190, 'data-value': derived.doubled }, children);
}
export default Component21190;

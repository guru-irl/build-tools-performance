import React from 'react';
const LABEL_10140 = 'component_10140';
export function Component10140({ value = 10140, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10140, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10140, 'data-value': derived.doubled }, children);
}
export default Component10140;

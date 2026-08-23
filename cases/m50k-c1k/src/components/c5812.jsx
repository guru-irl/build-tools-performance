import React from 'react';
const LABEL_5812 = 'component_5812';
export function Component5812({ value = 5812, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5812, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5812, 'data-value': derived.doubled }, children);
}
export default Component5812;

import React from 'react';
const LABEL_16274 = 'component_16274';
export function Component16274({ value = 16274, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16274, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16274, 'data-value': derived.doubled }, children);
}
export default Component16274;

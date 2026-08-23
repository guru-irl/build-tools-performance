import React from 'react';
const LABEL_22666 = 'component_22666';
export function Component22666({ value = 22666, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22666, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22666, 'data-value': derived.doubled }, children);
}
export default Component22666;

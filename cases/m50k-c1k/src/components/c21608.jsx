import React from 'react';
const LABEL_21608 = 'component_21608';
export function Component21608({ value = 21608, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21608, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21608, 'data-value': derived.doubled }, children);
}
export default Component21608;

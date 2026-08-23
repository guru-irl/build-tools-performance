import React from 'react';
const LABEL_5750 = 'component_5750';
export function Component5750({ value = 5750, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5750, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5750, 'data-value': derived.doubled }, children);
}
export default Component5750;

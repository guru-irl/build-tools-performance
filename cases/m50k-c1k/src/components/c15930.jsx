import React from 'react';
const LABEL_15930 = 'component_15930';
export function Component15930({ value = 15930, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15930, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15930, 'data-value': derived.doubled }, children);
}
export default Component15930;

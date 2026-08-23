import React from 'react';
const LABEL_15108 = 'component_15108';
export function Component15108({ value = 15108, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15108, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15108, 'data-value': derived.doubled }, children);
}
export default Component15108;

import React from 'react';
const LABEL_15643 = 'component_15643';
export function Component15643({ value = 15643, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15643, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15643, 'data-value': derived.doubled }, children);
}
export default Component15643;

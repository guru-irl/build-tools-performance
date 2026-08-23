import React from 'react';
const LABEL_33643 = 'component_33643';
export function Component33643({ value = 33643, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33643, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33643, 'data-value': derived.doubled }, children);
}
export default Component33643;

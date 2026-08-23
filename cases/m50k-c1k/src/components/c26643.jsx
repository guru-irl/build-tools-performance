import React from 'react';
const LABEL_26643 = 'component_26643';
export function Component26643({ value = 26643, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26643, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26643, 'data-value': derived.doubled }, children);
}
export default Component26643;

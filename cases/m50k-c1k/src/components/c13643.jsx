import React from 'react';
const LABEL_13643 = 'component_13643';
export function Component13643({ value = 13643, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13643, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13643, 'data-value': derived.doubled }, children);
}
export default Component13643;

import React from 'react';
const LABEL_6643 = 'component_6643';
export function Component6643({ value = 6643, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6643, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6643, 'data-value': derived.doubled }, children);
}
export default Component6643;

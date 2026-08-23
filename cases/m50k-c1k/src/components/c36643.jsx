import React from 'react';
const LABEL_36643 = 'component_36643';
export function Component36643({ value = 36643, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36643, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36643, 'data-value': derived.doubled }, children);
}
export default Component36643;

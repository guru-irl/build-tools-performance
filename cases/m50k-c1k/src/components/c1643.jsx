import React from 'react';
const LABEL_1643 = 'component_1643';
export function Component1643({ value = 1643, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1643, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1643, 'data-value': derived.doubled }, children);
}
export default Component1643;

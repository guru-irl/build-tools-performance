import React from 'react';
const LABEL_40643 = 'component_40643';
export function Component40643({ value = 40643, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40643, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40643, 'data-value': derived.doubled }, children);
}
export default Component40643;

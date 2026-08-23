import React from 'react';
const LABEL_21774 = 'component_21774';
export function Component21774({ value = 21774, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21774, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21774, 'data-value': derived.doubled }, children);
}
export default Component21774;

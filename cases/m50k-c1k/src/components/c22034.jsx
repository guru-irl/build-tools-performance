import React from 'react';
const LABEL_22034 = 'component_22034';
export function Component22034({ value = 22034, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22034, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22034, 'data-value': derived.doubled }, children);
}
export default Component22034;

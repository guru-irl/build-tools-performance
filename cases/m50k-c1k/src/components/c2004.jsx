import React from 'react';
const LABEL_2004 = 'component_2004';
export function Component2004({ value = 2004, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2004, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2004, 'data-value': derived.doubled }, children);
}
export default Component2004;

import React from 'react';
const LABEL_2002 = 'component_2002';
export function Component2002({ value = 2002, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2002, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2002, 'data-value': derived.doubled }, children);
}
export default Component2002;

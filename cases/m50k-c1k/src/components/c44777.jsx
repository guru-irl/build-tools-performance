import React from 'react';
const LABEL_44777 = 'component_44777';
export function Component44777({ value = 44777, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44777, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44777, 'data-value': derived.doubled }, children);
}
export default Component44777;

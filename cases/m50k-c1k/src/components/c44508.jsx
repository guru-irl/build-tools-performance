import React from 'react';
const LABEL_44508 = 'component_44508';
export function Component44508({ value = 44508, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44508, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44508, 'data-value': derived.doubled }, children);
}
export default Component44508;

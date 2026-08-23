import React from 'react';
const LABEL_44517 = 'component_44517';
export function Component44517({ value = 44517, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44517, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44517, 'data-value': derived.doubled }, children);
}
export default Component44517;

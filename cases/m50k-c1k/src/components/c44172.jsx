import React from 'react';
const LABEL_44172 = 'component_44172';
export function Component44172({ value = 44172, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44172, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44172, 'data-value': derived.doubled }, children);
}
export default Component44172;

import React from 'react';
const LABEL_44562 = 'component_44562';
export function Component44562({ value = 44562, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44562, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44562, 'data-value': derived.doubled }, children);
}
export default Component44562;

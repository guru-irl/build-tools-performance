import React from 'react';
const LABEL_44676 = 'component_44676';
export function Component44676({ value = 44676, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44676, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44676, 'data-value': derived.doubled }, children);
}
export default Component44676;

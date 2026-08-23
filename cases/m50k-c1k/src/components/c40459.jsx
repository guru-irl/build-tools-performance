import React from 'react';
const LABEL_40459 = 'component_40459';
export function Component40459({ value = 40459, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40459, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40459, 'data-value': derived.doubled }, children);
}
export default Component40459;

import React from 'react';
const LABEL_46459 = 'component_46459';
export function Component46459({ value = 46459, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46459, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46459, 'data-value': derived.doubled }, children);
}
export default Component46459;

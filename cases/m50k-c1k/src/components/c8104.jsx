import React from 'react';
const LABEL_8104 = 'component_8104';
export function Component8104({ value = 8104, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8104, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8104, 'data-value': derived.doubled }, children);
}
export default Component8104;

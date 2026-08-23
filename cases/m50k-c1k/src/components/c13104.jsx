import React from 'react';
const LABEL_13104 = 'component_13104';
export function Component13104({ value = 13104, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13104, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13104, 'data-value': derived.doubled }, children);
}
export default Component13104;

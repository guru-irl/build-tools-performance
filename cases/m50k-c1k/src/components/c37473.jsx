import React from 'react';
const LABEL_37473 = 'component_37473';
export function Component37473({ value = 37473, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37473, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37473, 'data-value': derived.doubled }, children);
}
export default Component37473;

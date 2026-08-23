import React from 'react';
const LABEL_41976 = 'component_41976';
export function Component41976({ value = 41976, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41976, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41976, 'data-value': derived.doubled }, children);
}
export default Component41976;

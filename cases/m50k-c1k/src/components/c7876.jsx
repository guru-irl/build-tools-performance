import React from 'react';
const LABEL_7876 = 'component_7876';
export function Component7876({ value = 7876, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7876, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7876, 'data-value': derived.doubled }, children);
}
export default Component7876;

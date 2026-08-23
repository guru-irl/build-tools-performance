import React from 'react';
const LABEL_28840 = 'component_28840';
export function Component28840({ value = 28840, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28840, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28840, 'data-value': derived.doubled }, children);
}
export default Component28840;

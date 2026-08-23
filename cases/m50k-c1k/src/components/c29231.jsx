import React from 'react';
const LABEL_29231 = 'component_29231';
export function Component29231({ value = 29231, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29231, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29231, 'data-value': derived.doubled }, children);
}
export default Component29231;

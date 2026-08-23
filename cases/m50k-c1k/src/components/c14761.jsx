import React from 'react';
const LABEL_14761 = 'component_14761';
export function Component14761({ value = 14761, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14761, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14761, 'data-value': derived.doubled }, children);
}
export default Component14761;

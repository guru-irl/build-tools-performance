import React from 'react';
const LABEL_14426 = 'component_14426';
export function Component14426({ value = 14426, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14426, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14426, 'data-value': derived.doubled }, children);
}
export default Component14426;

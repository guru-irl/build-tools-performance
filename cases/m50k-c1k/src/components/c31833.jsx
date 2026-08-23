import React from 'react';
const LABEL_31833 = 'component_31833';
export function Component31833({ value = 31833, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31833, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31833, 'data-value': derived.doubled }, children);
}
export default Component31833;

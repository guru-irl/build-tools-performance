import React from 'react';
const LABEL_31290 = 'component_31290';
export function Component31290({ value = 31290, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31290, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31290, 'data-value': derived.doubled }, children);
}
export default Component31290;

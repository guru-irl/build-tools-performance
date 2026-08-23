import React from 'react';
const LABEL_42961 = 'component_42961';
export function Component42961({ value = 42961, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42961, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42961, 'data-value': derived.doubled }, children);
}
export default Component42961;

import React from 'react';
const LABEL_14926 = 'component_14926';
export function Component14926({ value = 14926, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14926, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14926, 'data-value': derived.doubled }, children);
}
export default Component14926;

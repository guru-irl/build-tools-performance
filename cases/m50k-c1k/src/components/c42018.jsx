import React from 'react';
const LABEL_42018 = 'component_42018';
export function Component42018({ value = 42018, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42018, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42018, 'data-value': derived.doubled }, children);
}
export default Component42018;

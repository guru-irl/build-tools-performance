import React from 'react';
const LABEL_3561 = 'component_3561';
export function Component3561({ value = 3561, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3561, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3561, 'data-value': derived.doubled }, children);
}
export default Component3561;

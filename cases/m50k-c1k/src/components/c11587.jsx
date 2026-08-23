import React from 'react';
const LABEL_11587 = 'component_11587';
export function Component11587({ value = 11587, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11587, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11587, 'data-value': derived.doubled }, children);
}
export default Component11587;

import React from 'react';
const LABEL_33582 = 'component_33582';
export function Component33582({ value = 33582, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33582, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33582, 'data-value': derived.doubled }, children);
}
export default Component33582;

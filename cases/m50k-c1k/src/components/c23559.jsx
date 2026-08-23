import React from 'react';
const LABEL_23559 = 'component_23559';
export function Component23559({ value = 23559, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23559, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23559, 'data-value': derived.doubled }, children);
}
export default Component23559;

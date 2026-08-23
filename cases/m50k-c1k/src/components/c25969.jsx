import React from 'react';
const LABEL_25969 = 'component_25969';
export function Component25969({ value = 25969, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25969, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25969, 'data-value': derived.doubled }, children);
}
export default Component25969;

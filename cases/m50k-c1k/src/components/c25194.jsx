import React from 'react';
const LABEL_25194 = 'component_25194';
export function Component25194({ value = 25194, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25194, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25194, 'data-value': derived.doubled }, children);
}
export default Component25194;

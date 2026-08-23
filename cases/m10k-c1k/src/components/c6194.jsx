import React from 'react';
const LABEL_6194 = 'component_6194';
export function Component6194({ value = 6194, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6194, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6194, 'data-value': derived.doubled }, children);
}
export default Component6194;

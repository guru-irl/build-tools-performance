import React from 'react';
const LABEL_11194 = 'component_11194';
export function Component11194({ value = 11194, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11194, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11194, 'data-value': derived.doubled }, children);
}
export default Component11194;

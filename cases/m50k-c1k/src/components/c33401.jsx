import React from 'react';
const LABEL_33401 = 'component_33401';
export function Component33401({ value = 33401, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33401, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33401, 'data-value': derived.doubled }, children);
}
export default Component33401;

import React from 'react';
const LABEL_35395 = 'component_35395';
export function Component35395({ value = 35395, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35395, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35395, 'data-value': derived.doubled }, children);
}
export default Component35395;

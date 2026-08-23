import React from 'react';
const LABEL_45395 = 'component_45395';
export function Component45395({ value = 45395, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45395, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45395, 'data-value': derived.doubled }, children);
}
export default Component45395;

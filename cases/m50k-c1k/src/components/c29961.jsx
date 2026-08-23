import React from 'react';
const LABEL_29961 = 'component_29961';
export function Component29961({ value = 29961, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29961, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29961, 'data-value': derived.doubled }, children);
}
export default Component29961;

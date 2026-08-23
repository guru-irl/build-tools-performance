import React from 'react';
const LABEL_33190 = 'component_33190';
export function Component33190({ value = 33190, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33190, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33190, 'data-value': derived.doubled }, children);
}
export default Component33190;

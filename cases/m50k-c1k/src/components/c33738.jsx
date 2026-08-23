import React from 'react';
const LABEL_33738 = 'component_33738';
export function Component33738({ value = 33738, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33738, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33738, 'data-value': derived.doubled }, children);
}
export default Component33738;

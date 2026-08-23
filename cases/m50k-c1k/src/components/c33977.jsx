import React from 'react';
const LABEL_33977 = 'component_33977';
export function Component33977({ value = 33977, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33977, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33977, 'data-value': derived.doubled }, children);
}
export default Component33977;

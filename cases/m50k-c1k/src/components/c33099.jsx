import React from 'react';
const LABEL_33099 = 'component_33099';
export function Component33099({ value = 33099, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33099, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33099, 'data-value': derived.doubled }, children);
}
export default Component33099;

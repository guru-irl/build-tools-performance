import React from 'react';
const LABEL_33480 = 'component_33480';
export function Component33480({ value = 33480, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33480, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33480, 'data-value': derived.doubled }, children);
}
export default Component33480;

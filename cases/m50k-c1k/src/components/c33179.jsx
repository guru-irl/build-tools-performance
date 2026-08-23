import React from 'react';
const LABEL_33179 = 'component_33179';
export function Component33179({ value = 33179, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33179, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33179, 'data-value': derived.doubled }, children);
}
export default Component33179;

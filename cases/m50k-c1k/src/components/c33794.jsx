import React from 'react';
const LABEL_33794 = 'component_33794';
export function Component33794({ value = 33794, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33794, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33794, 'data-value': derived.doubled }, children);
}
export default Component33794;

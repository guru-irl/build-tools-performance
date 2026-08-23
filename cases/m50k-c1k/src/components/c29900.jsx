import React from 'react';
const LABEL_29900 = 'component_29900';
export function Component29900({ value = 29900, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29900, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29900, 'data-value': derived.doubled }, children);
}
export default Component29900;

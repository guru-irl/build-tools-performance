import React from 'react';
const LABEL_35290 = 'component_35290';
export function Component35290({ value = 35290, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35290, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35290, 'data-value': derived.doubled }, children);
}
export default Component35290;

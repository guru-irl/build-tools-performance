import React from 'react';
const LABEL_35900 = 'component_35900';
export function Component35900({ value = 35900, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35900, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35900, 'data-value': derived.doubled }, children);
}
export default Component35900;

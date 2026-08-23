import React from 'react';
const LABEL_22900 = 'component_22900';
export function Component22900({ value = 22900, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22900, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22900, 'data-value': derived.doubled }, children);
}
export default Component22900;

import React from 'react';
const LABEL_21900 = 'component_21900';
export function Component21900({ value = 21900, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21900, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21900, 'data-value': derived.doubled }, children);
}
export default Component21900;

import React from 'react';
const LABEL_29159 = 'component_29159';
export function Component29159({ value = 29159, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29159, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29159, 'data-value': derived.doubled }, children);
}
export default Component29159;

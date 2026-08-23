import React from 'react';
const LABEL_35593 = 'component_35593';
export function Component35593({ value = 35593, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35593, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35593, 'data-value': derived.doubled }, children);
}
export default Component35593;

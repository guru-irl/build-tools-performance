import React from 'react';
const LABEL_593 = 'component_593';
export function Component593({ value = 593, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_593, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_593, 'data-value': derived.doubled }, children);
}
export default Component593;

import React from 'react';
const LABEL_7857 = 'component_7857';
export function Component7857({ value = 7857, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7857, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7857, 'data-value': derived.doubled }, children);
}
export default Component7857;

import React from 'react';
const LABEL_29857 = 'component_29857';
export function Component29857({ value = 29857, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29857, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29857, 'data-value': derived.doubled }, children);
}
export default Component29857;

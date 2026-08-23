import React from 'react';
const LABEL_24694 = 'component_24694';
export function Component24694({ value = 24694, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24694, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24694, 'data-value': derived.doubled }, children);
}
export default Component24694;

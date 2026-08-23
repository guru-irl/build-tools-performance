import React from 'react';
const LABEL_34857 = 'component_34857';
export function Component34857({ value = 34857, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34857, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34857, 'data-value': derived.doubled }, children);
}
export default Component34857;

import React from 'react';
const LABEL_8857 = 'component_8857';
export function Component8857({ value = 8857, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8857, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8857, 'data-value': derived.doubled }, children);
}
export default Component8857;

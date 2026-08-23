import React from 'react';
const LABEL_41857 = 'component_41857';
export function Component41857({ value = 41857, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41857, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41857, 'data-value': derived.doubled }, children);
}
export default Component41857;

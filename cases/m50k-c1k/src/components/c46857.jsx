import React from 'react';
const LABEL_46857 = 'component_46857';
export function Component46857({ value = 46857, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46857, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46857, 'data-value': derived.doubled }, children);
}
export default Component46857;

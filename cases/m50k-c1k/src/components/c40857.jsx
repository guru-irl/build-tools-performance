import React from 'react';
const LABEL_40857 = 'component_40857';
export function Component40857({ value = 40857, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40857, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40857, 'data-value': derived.doubled }, children);
}
export default Component40857;

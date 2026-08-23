import React from 'react';
const LABEL_34198 = 'component_34198';
export function Component34198({ value = 34198, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34198, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34198, 'data-value': derived.doubled }, children);
}
export default Component34198;

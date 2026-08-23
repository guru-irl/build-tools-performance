import React from 'react';
const LABEL_34140 = 'component_34140';
export function Component34140({ value = 34140, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34140, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34140, 'data-value': derived.doubled }, children);
}
export default Component34140;

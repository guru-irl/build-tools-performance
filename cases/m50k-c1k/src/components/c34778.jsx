import React from 'react';
const LABEL_34778 = 'component_34778';
export function Component34778({ value = 34778, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34778, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34778, 'data-value': derived.doubled }, children);
}
export default Component34778;

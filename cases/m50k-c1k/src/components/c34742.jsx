import React from 'react';
const LABEL_34742 = 'component_34742';
export function Component34742({ value = 34742, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34742, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34742, 'data-value': derived.doubled }, children);
}
export default Component34742;

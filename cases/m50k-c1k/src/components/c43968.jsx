import React from 'react';
const LABEL_43968 = 'component_43968';
export function Component43968({ value = 43968, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43968, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43968, 'data-value': derived.doubled }, children);
}
export default Component43968;

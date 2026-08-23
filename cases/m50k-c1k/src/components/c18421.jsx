import React from 'react';
const LABEL_18421 = 'component_18421';
export function Component18421({ value = 18421, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18421, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18421, 'data-value': derived.doubled }, children);
}
export default Component18421;

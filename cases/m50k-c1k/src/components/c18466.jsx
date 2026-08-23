import React from 'react';
const LABEL_18466 = 'component_18466';
export function Component18466({ value = 18466, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18466, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18466, 'data-value': derived.doubled }, children);
}
export default Component18466;

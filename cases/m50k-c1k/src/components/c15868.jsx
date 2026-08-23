import React from 'react';
const LABEL_15868 = 'component_15868';
export function Component15868({ value = 15868, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15868, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15868, 'data-value': derived.doubled }, children);
}
export default Component15868;

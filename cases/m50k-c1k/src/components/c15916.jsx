import React from 'react';
const LABEL_15916 = 'component_15916';
export function Component15916({ value = 15916, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15916, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15916, 'data-value': derived.doubled }, children);
}
export default Component15916;

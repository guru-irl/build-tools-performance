import React from 'react';
const LABEL_24916 = 'component_24916';
export function Component24916({ value = 24916, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24916, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24916, 'data-value': derived.doubled }, children);
}
export default Component24916;

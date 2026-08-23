import React from 'react';
const LABEL_25916 = 'component_25916';
export function Component25916({ value = 25916, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25916, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25916, 'data-value': derived.doubled }, children);
}
export default Component25916;

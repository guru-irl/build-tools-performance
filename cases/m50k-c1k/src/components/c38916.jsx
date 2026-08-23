import React from 'react';
const LABEL_38916 = 'component_38916';
export function Component38916({ value = 38916, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38916, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38916, 'data-value': derived.doubled }, children);
}
export default Component38916;

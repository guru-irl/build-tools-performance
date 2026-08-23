import React from 'react';
const LABEL_34916 = 'component_34916';
export function Component34916({ value = 34916, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34916, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34916, 'data-value': derived.doubled }, children);
}
export default Component34916;

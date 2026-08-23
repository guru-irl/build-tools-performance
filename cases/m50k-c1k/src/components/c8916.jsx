import React from 'react';
const LABEL_8916 = 'component_8916';
export function Component8916({ value = 8916, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8916, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8916, 'data-value': derived.doubled }, children);
}
export default Component8916;

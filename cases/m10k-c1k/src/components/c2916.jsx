import React from 'react';
const LABEL_2916 = 'component_2916';
export function Component2916({ value = 2916, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2916, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2916, 'data-value': derived.doubled }, children);
}
export default Component2916;

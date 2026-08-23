import React from 'react';
const LABEL_43916 = 'component_43916';
export function Component43916({ value = 43916, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43916, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43916, 'data-value': derived.doubled }, children);
}
export default Component43916;

import React from 'react';
const LABEL_43777 = 'component_43777';
export function Component43777({ value = 43777, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43777, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43777, 'data-value': derived.doubled }, children);
}
export default Component43777;

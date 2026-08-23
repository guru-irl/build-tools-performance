import React from 'react';
const LABEL_43330 = 'component_43330';
export function Component43330({ value = 43330, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43330, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43330, 'data-value': derived.doubled }, children);
}
export default Component43330;

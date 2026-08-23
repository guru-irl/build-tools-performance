import React from 'react';
const LABEL_43541 = 'component_43541';
export function Component43541({ value = 43541, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43541, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43541, 'data-value': derived.doubled }, children);
}
export default Component43541;

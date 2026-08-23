import React from 'react';
const LABEL_43434 = 'component_43434';
export function Component43434({ value = 43434, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43434, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43434, 'data-value': derived.doubled }, children);
}
export default Component43434;

import React from 'react';
const LABEL_43710 = 'component_43710';
export function Component43710({ value = 43710, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43710, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43710, 'data-value': derived.doubled }, children);
}
export default Component43710;

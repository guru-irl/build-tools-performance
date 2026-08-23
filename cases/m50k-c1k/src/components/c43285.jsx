import React from 'react';
const LABEL_43285 = 'component_43285';
export function Component43285({ value = 43285, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43285, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43285, 'data-value': derived.doubled }, children);
}
export default Component43285;

import React from 'react';
const LABEL_43961 = 'component_43961';
export function Component43961({ value = 43961, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43961, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43961, 'data-value': derived.doubled }, children);
}
export default Component43961;

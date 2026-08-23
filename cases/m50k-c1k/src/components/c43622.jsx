import React from 'react';
const LABEL_43622 = 'component_43622';
export function Component43622({ value = 43622, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43622, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43622, 'data-value': derived.doubled }, children);
}
export default Component43622;

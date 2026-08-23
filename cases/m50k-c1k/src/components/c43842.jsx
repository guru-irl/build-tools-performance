import React from 'react';
const LABEL_43842 = 'component_43842';
export function Component43842({ value = 43842, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43842, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43842, 'data-value': derived.doubled }, children);
}
export default Component43842;

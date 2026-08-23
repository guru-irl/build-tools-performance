import React from 'react';
const LABEL_12058 = 'component_12058';
export function Component12058({ value = 12058, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12058, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12058, 'data-value': derived.doubled }, children);
}
export default Component12058;

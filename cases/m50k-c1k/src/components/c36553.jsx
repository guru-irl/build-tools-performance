import React from 'react';
const LABEL_36553 = 'component_36553';
export function Component36553({ value = 36553, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36553, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36553, 'data-value': derived.doubled }, children);
}
export default Component36553;

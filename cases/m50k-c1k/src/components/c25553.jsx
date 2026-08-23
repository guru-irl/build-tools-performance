import React from 'react';
const LABEL_25553 = 'component_25553';
export function Component25553({ value = 25553, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25553, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25553, 'data-value': derived.doubled }, children);
}
export default Component25553;

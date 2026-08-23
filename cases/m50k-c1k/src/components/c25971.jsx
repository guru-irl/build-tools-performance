import React from 'react';
const LABEL_25971 = 'component_25971';
export function Component25971({ value = 25971, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25971, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25971, 'data-value': derived.doubled }, children);
}
export default Component25971;

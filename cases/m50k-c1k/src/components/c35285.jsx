import React from 'react';
const LABEL_35285 = 'component_35285';
export function Component35285({ value = 35285, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35285, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35285, 'data-value': derived.doubled }, children);
}
export default Component35285;

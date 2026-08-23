import React from 'react';
const LABEL_36761 = 'component_36761';
export function Component36761({ value = 36761, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36761, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36761, 'data-value': derived.doubled }, children);
}
export default Component36761;

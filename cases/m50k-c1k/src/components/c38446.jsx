import React from 'react';
const LABEL_38446 = 'component_38446';
export function Component38446({ value = 38446, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38446, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38446, 'data-value': derived.doubled }, children);
}
export default Component38446;

import React from 'react';
const LABEL_10446 = 'component_10446';
export function Component10446({ value = 10446, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10446, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10446, 'data-value': derived.doubled }, children);
}
export default Component10446;

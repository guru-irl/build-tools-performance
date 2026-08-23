import React from 'react';
const LABEL_46446 = 'component_46446';
export function Component46446({ value = 46446, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46446, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46446, 'data-value': derived.doubled }, children);
}
export default Component46446;

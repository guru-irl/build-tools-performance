import React from 'react';
const LABEL_29446 = 'component_29446';
export function Component29446({ value = 29446, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29446, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29446, 'data-value': derived.doubled }, children);
}
export default Component29446;

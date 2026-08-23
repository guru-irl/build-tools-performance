import React from 'react';
const LABEL_26446 = 'component_26446';
export function Component26446({ value = 26446, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26446, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26446, 'data-value': derived.doubled }, children);
}
export default Component26446;

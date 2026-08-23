import React from 'react';
const LABEL_446 = 'component_446';
export function Component446({ value = 446, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_446, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_446, 'data-value': derived.doubled }, children);
}
export default Component446;

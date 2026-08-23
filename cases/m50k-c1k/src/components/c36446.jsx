import React from 'react';
const LABEL_36446 = 'component_36446';
export function Component36446({ value = 36446, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36446, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36446, 'data-value': derived.doubled }, children);
}
export default Component36446;

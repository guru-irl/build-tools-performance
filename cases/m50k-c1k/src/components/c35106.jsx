import React from 'react';
const LABEL_35106 = 'component_35106';
export function Component35106({ value = 35106, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35106, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35106, 'data-value': derived.doubled }, children);
}
export default Component35106;

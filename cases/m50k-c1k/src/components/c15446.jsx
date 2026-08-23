import React from 'react';
const LABEL_15446 = 'component_15446';
export function Component15446({ value = 15446, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15446, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15446, 'data-value': derived.doubled }, children);
}
export default Component15446;

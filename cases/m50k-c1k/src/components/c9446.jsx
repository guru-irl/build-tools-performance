import React from 'react';
const LABEL_9446 = 'component_9446';
export function Component9446({ value = 9446, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9446, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9446, 'data-value': derived.doubled }, children);
}
export default Component9446;

import React from 'react';
const LABEL_7446 = 'component_7446';
export function Component7446({ value = 7446, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7446, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7446, 'data-value': derived.doubled }, children);
}
export default Component7446;

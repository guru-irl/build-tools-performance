import React from 'react';
const LABEL_37683 = 'component_37683';
export function Component37683({ value = 37683, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37683, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37683, 'data-value': derived.doubled }, children);
}
export default Component37683;

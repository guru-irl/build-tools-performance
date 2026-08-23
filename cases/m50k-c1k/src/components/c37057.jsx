import React from 'react';
const LABEL_37057 = 'component_37057';
export function Component37057({ value = 37057, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37057, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37057, 'data-value': derived.doubled }, children);
}
export default Component37057;

import React from 'react';
const LABEL_37446 = 'component_37446';
export function Component37446({ value = 37446, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37446, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37446, 'data-value': derived.doubled }, children);
}
export default Component37446;

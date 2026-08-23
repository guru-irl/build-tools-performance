import React from 'react';
const LABEL_24446 = 'component_24446';
export function Component24446({ value = 24446, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24446, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24446, 'data-value': derived.doubled }, children);
}
export default Component24446;

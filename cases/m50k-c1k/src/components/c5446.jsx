import React from 'react';
const LABEL_5446 = 'component_5446';
export function Component5446({ value = 5446, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5446, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5446, 'data-value': derived.doubled }, children);
}
export default Component5446;

import React from 'react';
const LABEL_43937 = 'component_43937';
export function Component43937({ value = 43937, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43937, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43937, 'data-value': derived.doubled }, children);
}
export default Component43937;

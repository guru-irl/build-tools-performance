import React from 'react';
const LABEL_43446 = 'component_43446';
export function Component43446({ value = 43446, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43446, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43446, 'data-value': derived.doubled }, children);
}
export default Component43446;

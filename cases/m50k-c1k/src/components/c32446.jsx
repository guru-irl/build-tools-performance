import React from 'react';
const LABEL_32446 = 'component_32446';
export function Component32446({ value = 32446, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32446, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32446, 'data-value': derived.doubled }, children);
}
export default Component32446;

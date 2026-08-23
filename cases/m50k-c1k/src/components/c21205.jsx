import React from 'react';
const LABEL_21205 = 'component_21205';
export function Component21205({ value = 21205, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21205, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21205, 'data-value': derived.doubled }, children);
}
export default Component21205;

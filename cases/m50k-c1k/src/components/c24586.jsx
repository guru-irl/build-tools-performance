import React from 'react';
const LABEL_24586 = 'component_24586';
export function Component24586({ value = 24586, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24586, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24586, 'data-value': derived.doubled }, children);
}
export default Component24586;

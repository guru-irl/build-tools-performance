import React from 'react';
const LABEL_7971 = 'component_7971';
export function Component7971({ value = 7971, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7971, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7971, 'data-value': derived.doubled }, children);
}
export default Component7971;

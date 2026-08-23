import React from 'react';
const LABEL_12080 = 'component_12080';
export function Component12080({ value = 12080, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12080, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12080, 'data-value': derived.doubled }, children);
}
export default Component12080;

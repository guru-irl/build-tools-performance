import React from 'react';
const LABEL_12537 = 'component_12537';
export function Component12537({ value = 12537, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12537, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12537, 'data-value': derived.doubled }, children);
}
export default Component12537;

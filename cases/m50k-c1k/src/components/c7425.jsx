import React from 'react';
const LABEL_7425 = 'component_7425';
export function Component7425({ value = 7425, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7425, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7425, 'data-value': derived.doubled }, children);
}
export default Component7425;

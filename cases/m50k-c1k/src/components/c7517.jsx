import React from 'react';
const LABEL_7517 = 'component_7517';
export function Component7517({ value = 7517, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7517, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7517, 'data-value': derived.doubled }, children);
}
export default Component7517;

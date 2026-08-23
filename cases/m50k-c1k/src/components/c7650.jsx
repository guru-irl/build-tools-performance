import React from 'react';
const LABEL_7650 = 'component_7650';
export function Component7650({ value = 7650, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7650, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7650, 'data-value': derived.doubled }, children);
}
export default Component7650;

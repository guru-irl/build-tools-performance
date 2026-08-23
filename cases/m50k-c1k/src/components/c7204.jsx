import React from 'react';
const LABEL_7204 = 'component_7204';
export function Component7204({ value = 7204, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7204, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7204, 'data-value': derived.doubled }, children);
}
export default Component7204;

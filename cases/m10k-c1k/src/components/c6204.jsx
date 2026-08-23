import React from 'react';
const LABEL_6204 = 'component_6204';
export function Component6204({ value = 6204, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6204, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6204, 'data-value': derived.doubled }, children);
}
export default Component6204;

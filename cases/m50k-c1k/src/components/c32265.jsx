import React from 'react';
const LABEL_32265 = 'component_32265';
export function Component32265({ value = 32265, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32265, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32265, 'data-value': derived.doubled }, children);
}
export default Component32265;

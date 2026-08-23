import React from 'react';
const LABEL_22333 = 'component_22333';
export function Component22333({ value = 22333, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22333, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22333, 'data-value': derived.doubled }, children);
}
export default Component22333;

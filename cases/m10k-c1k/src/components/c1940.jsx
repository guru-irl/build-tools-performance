import React from 'react';
const LABEL_1940 = 'component_1940';
export function Component1940({ value = 1940, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1940, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1940, 'data-value': derived.doubled }, children);
}
export default Component1940;

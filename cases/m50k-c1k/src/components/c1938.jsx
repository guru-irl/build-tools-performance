import React from 'react';
const LABEL_1938 = 'component_1938';
export function Component1938({ value = 1938, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1938, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1938, 'data-value': derived.doubled }, children);
}
export default Component1938;

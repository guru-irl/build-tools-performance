import React from 'react';
const LABEL_21938 = 'component_21938';
export function Component21938({ value = 21938, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21938, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21938, 'data-value': derived.doubled }, children);
}
export default Component21938;

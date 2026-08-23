import React from 'react';
const LABEL_13938 = 'component_13938';
export function Component13938({ value = 13938, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13938, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13938, 'data-value': derived.doubled }, children);
}
export default Component13938;

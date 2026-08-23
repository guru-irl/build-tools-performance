import React from 'react';
const LABEL_13909 = 'component_13909';
export function Component13909({ value = 13909, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13909, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13909, 'data-value': derived.doubled }, children);
}
export default Component13909;

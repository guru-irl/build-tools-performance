import React from 'react';
const LABEL_3218 = 'component_3218';
export function Component3218({ value = 3218, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3218, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3218, 'data-value': derived.doubled }, children);
}
export default Component3218;

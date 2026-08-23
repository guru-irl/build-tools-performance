import React from 'react';
const LABEL_3909 = 'component_3909';
export function Component3909({ value = 3909, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3909, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3909, 'data-value': derived.doubled }, children);
}
export default Component3909;

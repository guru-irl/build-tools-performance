import React from 'react';
const LABEL_3436 = 'component_3436';
export function Component3436({ value = 3436, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3436, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3436, 'data-value': derived.doubled }, children);
}
export default Component3436;

import React from 'react';
const LABEL_28777 = 'component_28777';
export function Component28777({ value = 28777, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28777, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28777, 'data-value': derived.doubled }, children);
}
export default Component28777;

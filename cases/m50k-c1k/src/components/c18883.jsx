import React from 'react';
const LABEL_18883 = 'component_18883';
export function Component18883({ value = 18883, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18883, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18883, 'data-value': derived.doubled }, children);
}
export default Component18883;

import React from 'react';
const LABEL_22883 = 'component_22883';
export function Component22883({ value = 22883, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22883, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22883, 'data-value': derived.doubled }, children);
}
export default Component22883;

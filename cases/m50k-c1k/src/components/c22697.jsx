import React from 'react';
const LABEL_22697 = 'component_22697';
export function Component22697({ value = 22697, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22697, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22697, 'data-value': derived.doubled }, children);
}
export default Component22697;

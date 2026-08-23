import React from 'react';
const LABEL_22306 = 'component_22306';
export function Component22306({ value = 22306, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22306, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22306, 'data-value': derived.doubled }, children);
}
export default Component22306;

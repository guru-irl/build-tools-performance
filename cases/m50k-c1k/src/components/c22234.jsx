import React from 'react';
const LABEL_22234 = 'component_22234';
export function Component22234({ value = 22234, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22234, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22234, 'data-value': derived.doubled }, children);
}
export default Component22234;

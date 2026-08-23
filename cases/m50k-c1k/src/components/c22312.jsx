import React from 'react';
const LABEL_22312 = 'component_22312';
export function Component22312({ value = 22312, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22312, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22312, 'data-value': derived.doubled }, children);
}
export default Component22312;

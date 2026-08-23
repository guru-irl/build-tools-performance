import React from 'react';
const LABEL_19918 = 'component_19918';
export function Component19918({ value = 19918, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19918, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19918, 'data-value': derived.doubled }, children);
}
export default Component19918;

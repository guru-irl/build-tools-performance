import React from 'react';
const LABEL_24043 = 'component_24043';
export function Component24043({ value = 24043, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24043, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24043, 'data-value': derived.doubled }, children);
}
export default Component24043;

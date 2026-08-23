import React from 'react';
const LABEL_11043 = 'component_11043';
export function Component11043({ value = 11043, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11043, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11043, 'data-value': derived.doubled }, children);
}
export default Component11043;

import React from 'react';
const LABEL_39302 = 'component_39302';
export function Component39302({ value = 39302, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39302, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39302, 'data-value': derived.doubled }, children);
}
export default Component39302;

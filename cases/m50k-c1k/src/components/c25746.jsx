import React from 'react';
const LABEL_25746 = 'component_25746';
export function Component25746({ value = 25746, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25746, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25746, 'data-value': derived.doubled }, children);
}
export default Component25746;

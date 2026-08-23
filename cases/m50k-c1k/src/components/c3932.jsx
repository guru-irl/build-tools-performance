import React from 'react';
const LABEL_3932 = 'component_3932';
export function Component3932({ value = 3932, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3932, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3932, 'data-value': derived.doubled }, children);
}
export default Component3932;

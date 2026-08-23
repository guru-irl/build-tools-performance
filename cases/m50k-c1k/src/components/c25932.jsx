import React from 'react';
const LABEL_25932 = 'component_25932';
export function Component25932({ value = 25932, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25932, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25932, 'data-value': derived.doubled }, children);
}
export default Component25932;

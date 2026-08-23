import React from 'react';
const LABEL_39932 = 'component_39932';
export function Component39932({ value = 39932, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39932, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39932, 'data-value': derived.doubled }, children);
}
export default Component39932;

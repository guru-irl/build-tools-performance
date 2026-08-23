import React from 'react';
const LABEL_36932 = 'component_36932';
export function Component36932({ value = 36932, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36932, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36932, 'data-value': derived.doubled }, children);
}
export default Component36932;

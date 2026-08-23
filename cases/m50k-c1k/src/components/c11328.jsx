import React from 'react';
const LABEL_11328 = 'component_11328';
export function Component11328({ value = 11328, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11328, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11328, 'data-value': derived.doubled }, children);
}
export default Component11328;

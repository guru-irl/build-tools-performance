import React from 'react';
const LABEL_11053 = 'component_11053';
export function Component11053({ value = 11053, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11053, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11053, 'data-value': derived.doubled }, children);
}
export default Component11053;

import React from 'react';
const LABEL_11979 = 'component_11979';
export function Component11979({ value = 11979, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11979, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11979, 'data-value': derived.doubled }, children);
}
export default Component11979;

import React from 'react';
const LABEL_4979 = 'component_4979';
export function Component4979({ value = 4979, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4979, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4979, 'data-value': derived.doubled }, children);
}
export default Component4979;

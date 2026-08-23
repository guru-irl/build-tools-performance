import React from 'react';
const LABEL_39979 = 'component_39979';
export function Component39979({ value = 39979, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39979, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39979, 'data-value': derived.doubled }, children);
}
export default Component39979;

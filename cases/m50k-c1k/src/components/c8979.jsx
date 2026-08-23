import React from 'react';
const LABEL_8979 = 'component_8979';
export function Component8979({ value = 8979, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8979, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8979, 'data-value': derived.doubled }, children);
}
export default Component8979;

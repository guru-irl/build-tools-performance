import React from 'react';
const LABEL_18979 = 'component_18979';
export function Component18979({ value = 18979, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18979, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18979, 'data-value': derived.doubled }, children);
}
export default Component18979;

import React from 'react';
const LABEL_26979 = 'component_26979';
export function Component26979({ value = 26979, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26979, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26979, 'data-value': derived.doubled }, children);
}
export default Component26979;

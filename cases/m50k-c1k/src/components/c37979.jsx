import React from 'react';
const LABEL_37979 = 'component_37979';
export function Component37979({ value = 37979, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37979, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37979, 'data-value': derived.doubled }, children);
}
export default Component37979;

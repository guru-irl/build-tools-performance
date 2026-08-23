import React from 'react';
const LABEL_2979 = 'component_2979';
export function Component2979({ value = 2979, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2979, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2979, 'data-value': derived.doubled }, children);
}
export default Component2979;

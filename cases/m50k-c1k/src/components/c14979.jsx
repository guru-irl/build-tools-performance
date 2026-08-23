import React from 'react';
const LABEL_14979 = 'component_14979';
export function Component14979({ value = 14979, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14979, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14979, 'data-value': derived.doubled }, children);
}
export default Component14979;

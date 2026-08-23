import React from 'react';
const LABEL_36303 = 'component_36303';
export function Component36303({ value = 36303, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36303, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36303, 'data-value': derived.doubled }, children);
}
export default Component36303;

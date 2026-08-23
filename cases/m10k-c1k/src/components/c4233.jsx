import React from 'react';
const LABEL_4233 = 'component_4233';
export function Component4233({ value = 4233, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4233, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4233, 'data-value': derived.doubled }, children);
}
export default Component4233;

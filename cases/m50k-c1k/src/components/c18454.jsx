import React from 'react';
const LABEL_18454 = 'component_18454';
export function Component18454({ value = 18454, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18454, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18454, 'data-value': derived.doubled }, children);
}
export default Component18454;

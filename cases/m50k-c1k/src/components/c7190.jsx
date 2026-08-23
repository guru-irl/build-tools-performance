import React from 'react';
const LABEL_7190 = 'component_7190';
export function Component7190({ value = 7190, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7190, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7190, 'data-value': derived.doubled }, children);
}
export default Component7190;

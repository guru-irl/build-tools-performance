import React from 'react';
const LABEL_39405 = 'component_39405';
export function Component39405({ value = 39405, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39405, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39405, 'data-value': derived.doubled }, children);
}
export default Component39405;

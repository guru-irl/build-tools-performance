import React from 'react';
const LABEL_25355 = 'component_25355';
export function Component25355({ value = 25355, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25355, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25355, 'data-value': derived.doubled }, children);
}
export default Component25355;

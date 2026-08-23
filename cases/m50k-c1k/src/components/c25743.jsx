import React from 'react';
const LABEL_25743 = 'component_25743';
export function Component25743({ value = 25743, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25743, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25743, 'data-value': derived.doubled }, children);
}
export default Component25743;

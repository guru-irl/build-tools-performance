import React from 'react';
const LABEL_25431 = 'component_25431';
export function Component25431({ value = 25431, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25431, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25431, 'data-value': derived.doubled }, children);
}
export default Component25431;

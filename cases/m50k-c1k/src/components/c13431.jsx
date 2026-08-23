import React from 'react';
const LABEL_13431 = 'component_13431';
export function Component13431({ value = 13431, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13431, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13431, 'data-value': derived.doubled }, children);
}
export default Component13431;

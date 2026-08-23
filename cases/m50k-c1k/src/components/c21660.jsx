import React from 'react';
const LABEL_21660 = 'component_21660';
export function Component21660({ value = 21660, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21660, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21660, 'data-value': derived.doubled }, children);
}
export default Component21660;

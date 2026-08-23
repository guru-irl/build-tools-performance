import React from 'react';
const LABEL_23040 = 'component_23040';
export function Component23040({ value = 23040, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23040, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23040, 'data-value': derived.doubled }, children);
}
export default Component23040;

import React from 'react';
const LABEL_19116 = 'component_19116';
export function Component19116({ value = 19116, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19116, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19116, 'data-value': derived.doubled }, children);
}
export default Component19116;

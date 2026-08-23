import React from 'react';
const LABEL_23196 = 'component_23196';
export function Component23196({ value = 23196, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23196, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23196, 'data-value': derived.doubled }, children);
}
export default Component23196;

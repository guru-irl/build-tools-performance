import React from 'react';
const LABEL_38761 = 'component_38761';
export function Component38761({ value = 38761, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38761, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38761, 'data-value': derived.doubled }, children);
}
export default Component38761;

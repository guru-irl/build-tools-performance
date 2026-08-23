import React from 'react';
const LABEL_461 = 'component_461';
export function Component461({ value = 461, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_461, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_461, 'data-value': derived.doubled }, children);
}
export default Component461;

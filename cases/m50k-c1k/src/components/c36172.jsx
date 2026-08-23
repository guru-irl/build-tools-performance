import React from 'react';
const LABEL_36172 = 'component_36172';
export function Component36172({ value = 36172, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36172, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36172, 'data-value': derived.doubled }, children);
}
export default Component36172;

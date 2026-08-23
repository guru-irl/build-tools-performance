import React from 'react';
const LABEL_15172 = 'component_15172';
export function Component15172({ value = 15172, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15172, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15172, 'data-value': derived.doubled }, children);
}
export default Component15172;

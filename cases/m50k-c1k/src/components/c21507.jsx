import React from 'react';
const LABEL_21507 = 'component_21507';
export function Component21507({ value = 21507, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21507, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21507, 'data-value': derived.doubled }, children);
}
export default Component21507;

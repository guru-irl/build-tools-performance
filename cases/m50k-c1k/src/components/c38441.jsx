import React from 'react';
const LABEL_38441 = 'component_38441';
export function Component38441({ value = 38441, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38441, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38441, 'data-value': derived.doubled }, children);
}
export default Component38441;

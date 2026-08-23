import React from 'react';
const LABEL_25672 = 'component_25672';
export function Component25672({ value = 25672, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25672, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25672, 'data-value': derived.doubled }, children);
}
export default Component25672;

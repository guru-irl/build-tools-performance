import React from 'react';
const LABEL_25733 = 'component_25733';
export function Component25733({ value = 25733, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25733, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25733, 'data-value': derived.doubled }, children);
}
export default Component25733;

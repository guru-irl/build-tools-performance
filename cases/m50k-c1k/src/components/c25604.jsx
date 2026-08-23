import React from 'react';
const LABEL_25604 = 'component_25604';
export function Component25604({ value = 25604, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25604, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25604, 'data-value': derived.doubled }, children);
}
export default Component25604;

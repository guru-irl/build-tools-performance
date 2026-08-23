import React from 'react';
const LABEL_25588 = 'component_25588';
export function Component25588({ value = 25588, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25588, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25588, 'data-value': derived.doubled }, children);
}
export default Component25588;

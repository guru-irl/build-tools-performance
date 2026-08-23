import React from 'react';
const LABEL_15517 = 'component_15517';
export function Component15517({ value = 15517, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15517, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15517, 'data-value': derived.doubled }, children);
}
export default Component15517;

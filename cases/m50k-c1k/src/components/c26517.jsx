import React from 'react';
const LABEL_26517 = 'component_26517';
export function Component26517({ value = 26517, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26517, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26517, 'data-value': derived.doubled }, children);
}
export default Component26517;

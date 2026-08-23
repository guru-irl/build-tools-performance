import React from 'react';
const LABEL_26777 = 'component_26777';
export function Component26777({ value = 26777, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26777, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26777, 'data-value': derived.doubled }, children);
}
export default Component26777;

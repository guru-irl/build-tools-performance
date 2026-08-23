import React from 'react';
const LABEL_5777 = 'component_5777';
export function Component5777({ value = 5777, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5777, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5777, 'data-value': derived.doubled }, children);
}
export default Component5777;

import React from 'react';
const LABEL_2158 = 'component_2158';
export function Component2158({ value = 2158, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2158, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2158, 'data-value': derived.doubled }, children);
}
export default Component2158;

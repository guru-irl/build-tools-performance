import React from 'react';
const LABEL_40489 = 'component_40489';
export function Component40489({ value = 40489, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40489, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40489, 'data-value': derived.doubled }, children);
}
export default Component40489;

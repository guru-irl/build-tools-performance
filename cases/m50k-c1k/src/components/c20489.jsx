import React from 'react';
const LABEL_20489 = 'component_20489';
export function Component20489({ value = 20489, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20489, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20489, 'data-value': derived.doubled }, children);
}
export default Component20489;

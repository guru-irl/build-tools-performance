import React from 'react';
const LABEL_20791 = 'component_20791';
export function Component20791({ value = 20791, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20791, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20791, 'data-value': derived.doubled }, children);
}
export default Component20791;

import React from 'react';
const LABEL_20172 = 'component_20172';
export function Component20172({ value = 20172, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20172, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20172, 'data-value': derived.doubled }, children);
}
export default Component20172;

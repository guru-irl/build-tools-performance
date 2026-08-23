import React from 'react';
const LABEL_20435 = 'component_20435';
export function Component20435({ value = 20435, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20435, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20435, 'data-value': derived.doubled }, children);
}
export default Component20435;

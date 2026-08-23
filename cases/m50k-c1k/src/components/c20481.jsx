import React from 'react';
const LABEL_20481 = 'component_20481';
export function Component20481({ value = 20481, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20481, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20481, 'data-value': derived.doubled }, children);
}
export default Component20481;

import React from 'react';
const LABEL_18169 = 'component_18169';
export function Component18169({ value = 18169, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18169, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18169, 'data-value': derived.doubled }, children);
}
export default Component18169;

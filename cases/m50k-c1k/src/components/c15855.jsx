import React from 'react';
const LABEL_15855 = 'component_15855';
export function Component15855({ value = 15855, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15855, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15855, 'data-value': derived.doubled }, children);
}
export default Component15855;

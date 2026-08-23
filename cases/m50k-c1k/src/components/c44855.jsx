import React from 'react';
const LABEL_44855 = 'component_44855';
export function Component44855({ value = 44855, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44855, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44855, 'data-value': derived.doubled }, children);
}
export default Component44855;

import React from 'react';
const LABEL_18616 = 'component_18616';
export function Component18616({ value = 18616, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18616, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18616, 'data-value': derived.doubled }, children);
}
export default Component18616;

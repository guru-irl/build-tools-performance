import React from 'react';
const LABEL_36050 = 'component_36050';
export function Component36050({ value = 36050, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36050, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36050, 'data-value': derived.doubled }, children);
}
export default Component36050;

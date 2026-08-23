import React from 'react';
const LABEL_35763 = 'component_35763';
export function Component35763({ value = 35763, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35763, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35763, 'data-value': derived.doubled }, children);
}
export default Component35763;

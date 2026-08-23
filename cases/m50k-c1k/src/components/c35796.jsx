import React from 'react';
const LABEL_35796 = 'component_35796';
export function Component35796({ value = 35796, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35796, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35796, 'data-value': derived.doubled }, children);
}
export default Component35796;

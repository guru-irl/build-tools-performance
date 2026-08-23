import React from 'react';
const LABEL_10796 = 'component_10796';
export function Component10796({ value = 10796, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10796, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10796, 'data-value': derived.doubled }, children);
}
export default Component10796;

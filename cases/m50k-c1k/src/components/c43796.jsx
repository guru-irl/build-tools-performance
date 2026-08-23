import React from 'react';
const LABEL_43796 = 'component_43796';
export function Component43796({ value = 43796, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43796, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43796, 'data-value': derived.doubled }, children);
}
export default Component43796;

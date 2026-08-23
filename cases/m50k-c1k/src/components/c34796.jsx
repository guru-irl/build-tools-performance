import React from 'react';
const LABEL_34796 = 'component_34796';
export function Component34796({ value = 34796, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34796, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34796, 'data-value': derived.doubled }, children);
}
export default Component34796;

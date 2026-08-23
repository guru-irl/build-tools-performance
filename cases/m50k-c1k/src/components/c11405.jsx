import React from 'react';
const LABEL_11405 = 'component_11405';
export function Component11405({ value = 11405, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11405, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11405, 'data-value': derived.doubled }, children);
}
export default Component11405;

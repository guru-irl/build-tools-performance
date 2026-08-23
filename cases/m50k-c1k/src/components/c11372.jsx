import React from 'react';
const LABEL_11372 = 'component_11372';
export function Component11372({ value = 11372, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11372, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11372, 'data-value': derived.doubled }, children);
}
export default Component11372;

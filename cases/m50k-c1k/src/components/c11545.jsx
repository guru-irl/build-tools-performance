import React from 'react';
const LABEL_11545 = 'component_11545';
export function Component11545({ value = 11545, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11545, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11545, 'data-value': derived.doubled }, children);
}
export default Component11545;

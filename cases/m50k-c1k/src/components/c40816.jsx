import React from 'react';
const LABEL_40816 = 'component_40816';
export function Component40816({ value = 40816, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40816, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40816, 'data-value': derived.doubled }, children);
}
export default Component40816;

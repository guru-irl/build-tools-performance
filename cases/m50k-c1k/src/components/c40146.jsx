import React from 'react';
const LABEL_40146 = 'component_40146';
export function Component40146({ value = 40146, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40146, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40146, 'data-value': derived.doubled }, children);
}
export default Component40146;

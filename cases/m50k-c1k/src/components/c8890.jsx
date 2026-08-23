import React from 'react';
const LABEL_8890 = 'component_8890';
export function Component8890({ value = 8890, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8890, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8890, 'data-value': derived.doubled }, children);
}
export default Component8890;

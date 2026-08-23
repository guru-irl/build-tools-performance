import React from 'react';
const LABEL_8234 = 'component_8234';
export function Component8234({ value = 8234, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8234, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8234, 'data-value': derived.doubled }, children);
}
export default Component8234;

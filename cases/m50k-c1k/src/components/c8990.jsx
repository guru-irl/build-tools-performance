import React from 'react';
const LABEL_8990 = 'component_8990';
export function Component8990({ value = 8990, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8990, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8990, 'data-value': derived.doubled }, children);
}
export default Component8990;

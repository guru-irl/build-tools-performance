import React from 'react';
const LABEL_8233 = 'component_8233';
export function Component8233({ value = 8233, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8233, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8233, 'data-value': derived.doubled }, children);
}
export default Component8233;

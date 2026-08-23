import React from 'react';
const LABEL_8938 = 'component_8938';
export function Component8938({ value = 8938, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8938, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8938, 'data-value': derived.doubled }, children);
}
export default Component8938;

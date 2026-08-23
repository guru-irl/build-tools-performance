import React from 'react';
const LABEL_42565 = 'component_42565';
export function Component42565({ value = 42565, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42565, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42565, 'data-value': derived.doubled }, children);
}
export default Component42565;

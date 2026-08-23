import React from 'react';
const LABEL_18565 = 'component_18565';
export function Component18565({ value = 18565, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18565, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18565, 'data-value': derived.doubled }, children);
}
export default Component18565;

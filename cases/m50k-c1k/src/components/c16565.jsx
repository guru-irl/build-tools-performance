import React from 'react';
const LABEL_16565 = 'component_16565';
export function Component16565({ value = 16565, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16565, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16565, 'data-value': derived.doubled }, children);
}
export default Component16565;

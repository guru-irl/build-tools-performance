import React from 'react';
const LABEL_8565 = 'component_8565';
export function Component8565({ value = 8565, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8565, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8565, 'data-value': derived.doubled }, children);
}
export default Component8565;

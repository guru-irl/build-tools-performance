import React from 'react';
const LABEL_28565 = 'component_28565';
export function Component28565({ value = 28565, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28565, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28565, 'data-value': derived.doubled }, children);
}
export default Component28565;

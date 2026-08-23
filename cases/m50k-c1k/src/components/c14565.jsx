import React from 'react';
const LABEL_14565 = 'component_14565';
export function Component14565({ value = 14565, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14565, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14565, 'data-value': derived.doubled }, children);
}
export default Component14565;

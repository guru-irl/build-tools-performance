import React from 'react';
const LABEL_44192 = 'component_44192';
export function Component44192({ value = 44192, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44192, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44192, 'data-value': derived.doubled }, children);
}
export default Component44192;

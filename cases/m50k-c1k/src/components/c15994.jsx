import React from 'react';
const LABEL_15994 = 'component_15994';
export function Component15994({ value = 15994, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15994, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15994, 'data-value': derived.doubled }, children);
}
export default Component15994;

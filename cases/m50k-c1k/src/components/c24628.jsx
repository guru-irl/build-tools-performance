import React from 'react';
const LABEL_24628 = 'component_24628';
export function Component24628({ value = 24628, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24628, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24628, 'data-value': derived.doubled }, children);
}
export default Component24628;

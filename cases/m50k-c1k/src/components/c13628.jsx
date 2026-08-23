import React from 'react';
const LABEL_13628 = 'component_13628';
export function Component13628({ value = 13628, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13628, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13628, 'data-value': derived.doubled }, children);
}
export default Component13628;

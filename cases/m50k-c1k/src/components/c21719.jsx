import React from 'react';
const LABEL_21719 = 'component_21719';
export function Component21719({ value = 21719, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21719, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21719, 'data-value': derived.doubled }, children);
}
export default Component21719;

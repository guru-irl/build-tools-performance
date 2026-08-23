import React from 'react';
const LABEL_3719 = 'component_3719';
export function Component3719({ value = 3719, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3719, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3719, 'data-value': derived.doubled }, children);
}
export default Component3719;

import React from 'react';
const LABEL_44719 = 'component_44719';
export function Component44719({ value = 44719, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44719, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44719, 'data-value': derived.doubled }, children);
}
export default Component44719;

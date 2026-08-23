import React from 'react';
const LABEL_37719 = 'component_37719';
export function Component37719({ value = 37719, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37719, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37719, 'data-value': derived.doubled }, children);
}
export default Component37719;

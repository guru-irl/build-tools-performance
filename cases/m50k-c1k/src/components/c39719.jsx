import React from 'react';
const LABEL_39719 = 'component_39719';
export function Component39719({ value = 39719, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39719, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39719, 'data-value': derived.doubled }, children);
}
export default Component39719;

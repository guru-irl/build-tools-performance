import React from 'react';
const LABEL_27719 = 'component_27719';
export function Component27719({ value = 27719, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27719, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27719, 'data-value': derived.doubled }, children);
}
export default Component27719;

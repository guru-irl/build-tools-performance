import React from 'react';
const LABEL_7719 = 'component_7719';
export function Component7719({ value = 7719, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7719, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7719, 'data-value': derived.doubled }, children);
}
export default Component7719;

import React from 'react';
const LABEL_10719 = 'component_10719';
export function Component10719({ value = 10719, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10719, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10719, 'data-value': derived.doubled }, children);
}
export default Component10719;

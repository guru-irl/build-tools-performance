import React from 'react';
const LABEL_13719 = 'component_13719';
export function Component13719({ value = 13719, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13719, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13719, 'data-value': derived.doubled }, children);
}
export default Component13719;

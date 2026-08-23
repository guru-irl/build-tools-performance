import React from 'react';
const LABEL_28719 = 'component_28719';
export function Component28719({ value = 28719, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28719, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28719, 'data-value': derived.doubled }, children);
}
export default Component28719;

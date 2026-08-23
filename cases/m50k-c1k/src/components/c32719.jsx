import React from 'react';
const LABEL_32719 = 'component_32719';
export function Component32719({ value = 32719, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32719, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32719, 'data-value': derived.doubled }, children);
}
export default Component32719;

import React from 'react';
const LABEL_31719 = 'component_31719';
export function Component31719({ value = 31719, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31719, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31719, 'data-value': derived.doubled }, children);
}
export default Component31719;

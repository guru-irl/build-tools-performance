import React from 'react';
const LABEL_29719 = 'component_29719';
export function Component29719({ value = 29719, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29719, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29719, 'data-value': derived.doubled }, children);
}
export default Component29719;

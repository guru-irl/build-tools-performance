import React from 'react';
const LABEL_8719 = 'component_8719';
export function Component8719({ value = 8719, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8719, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8719, 'data-value': derived.doubled }, children);
}
export default Component8719;

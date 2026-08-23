import React from 'react';
const LABEL_9719 = 'component_9719';
export function Component9719({ value = 9719, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9719, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9719, 'data-value': derived.doubled }, children);
}
export default Component9719;

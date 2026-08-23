import React from 'react';
const LABEL_22719 = 'component_22719';
export function Component22719({ value = 22719, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22719, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22719, 'data-value': derived.doubled }, children);
}
export default Component22719;

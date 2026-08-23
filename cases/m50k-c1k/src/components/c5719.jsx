import React from 'react';
const LABEL_5719 = 'component_5719';
export function Component5719({ value = 5719, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5719, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5719, 'data-value': derived.doubled }, children);
}
export default Component5719;

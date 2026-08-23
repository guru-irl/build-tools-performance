import React from 'react';
const LABEL_17719 = 'component_17719';
export function Component17719({ value = 17719, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17719, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17719, 'data-value': derived.doubled }, children);
}
export default Component17719;

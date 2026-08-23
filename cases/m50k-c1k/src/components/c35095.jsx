import React from 'react';
const LABEL_35095 = 'component_35095';
export function Component35095({ value = 35095, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35095, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35095, 'data-value': derived.doubled }, children);
}
export default Component35095;

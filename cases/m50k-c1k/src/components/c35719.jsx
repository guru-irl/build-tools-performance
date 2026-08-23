import React from 'react';
const LABEL_35719 = 'component_35719';
export function Component35719({ value = 35719, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35719, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35719, 'data-value': derived.doubled }, children);
}
export default Component35719;

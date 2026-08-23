import React from 'react';
const LABEL_23719 = 'component_23719';
export function Component23719({ value = 23719, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23719, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23719, 'data-value': derived.doubled }, children);
}
export default Component23719;

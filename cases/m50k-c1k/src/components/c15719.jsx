import React from 'react';
const LABEL_15719 = 'component_15719';
export function Component15719({ value = 15719, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15719, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15719, 'data-value': derived.doubled }, children);
}
export default Component15719;

import React from 'react';
const LABEL_45719 = 'component_45719';
export function Component45719({ value = 45719, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45719, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45719, 'data-value': derived.doubled }, children);
}
export default Component45719;

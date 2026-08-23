import React from 'react';
const LABEL_42719 = 'component_42719';
export function Component42719({ value = 42719, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42719, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42719, 'data-value': derived.doubled }, children);
}
export default Component42719;

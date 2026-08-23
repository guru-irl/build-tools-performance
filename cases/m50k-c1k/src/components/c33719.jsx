import React from 'react';
const LABEL_33719 = 'component_33719';
export function Component33719({ value = 33719, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33719, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33719, 'data-value': derived.doubled }, children);
}
export default Component33719;

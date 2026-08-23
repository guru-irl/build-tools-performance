import React from 'react';
const LABEL_36719 = 'component_36719';
export function Component36719({ value = 36719, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36719, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36719, 'data-value': derived.doubled }, children);
}
export default Component36719;

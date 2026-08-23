import React from 'react';
const LABEL_20719 = 'component_20719';
export function Component20719({ value = 20719, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20719, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20719, 'data-value': derived.doubled }, children);
}
export default Component20719;

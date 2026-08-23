import React from 'react';
const LABEL_1719 = 'component_1719';
export function Component1719({ value = 1719, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1719, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1719, 'data-value': derived.doubled }, children);
}
export default Component1719;

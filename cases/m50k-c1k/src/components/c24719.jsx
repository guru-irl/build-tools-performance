import React from 'react';
const LABEL_24719 = 'component_24719';
export function Component24719({ value = 24719, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24719, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24719, 'data-value': derived.doubled }, children);
}
export default Component24719;

import React from 'react';
const LABEL_12719 = 'component_12719';
export function Component12719({ value = 12719, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12719, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12719, 'data-value': derived.doubled }, children);
}
export default Component12719;

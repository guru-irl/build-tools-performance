import React from 'react';
const LABEL_25719 = 'component_25719';
export function Component25719({ value = 25719, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25719, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25719, 'data-value': derived.doubled }, children);
}
export default Component25719;

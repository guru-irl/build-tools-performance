import React from 'react';
const LABEL_719 = 'component_719';
export function Component719({ value = 719, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_719, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_719, 'data-value': derived.doubled }, children);
}
export default Component719;

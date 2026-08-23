import React from 'react';
const LABEL_14719 = 'component_14719';
export function Component14719({ value = 14719, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14719, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14719, 'data-value': derived.doubled }, children);
}
export default Component14719;

import React from 'react';
const LABEL_26719 = 'component_26719';
export function Component26719({ value = 26719, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26719, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26719, 'data-value': derived.doubled }, children);
}
export default Component26719;

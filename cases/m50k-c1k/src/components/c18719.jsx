import React from 'react';
const LABEL_18719 = 'component_18719';
export function Component18719({ value = 18719, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18719, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18719, 'data-value': derived.doubled }, children);
}
export default Component18719;

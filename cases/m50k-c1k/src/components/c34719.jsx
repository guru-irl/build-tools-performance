import React from 'react';
const LABEL_34719 = 'component_34719';
export function Component34719({ value = 34719, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34719, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34719, 'data-value': derived.doubled }, children);
}
export default Component34719;

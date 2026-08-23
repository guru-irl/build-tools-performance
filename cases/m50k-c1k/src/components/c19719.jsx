import React from 'react';
const LABEL_19719 = 'component_19719';
export function Component19719({ value = 19719, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19719, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19719, 'data-value': derived.doubled }, children);
}
export default Component19719;

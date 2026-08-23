import React from 'react';
const LABEL_4719 = 'component_4719';
export function Component4719({ value = 4719, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4719, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4719, 'data-value': derived.doubled }, children);
}
export default Component4719;

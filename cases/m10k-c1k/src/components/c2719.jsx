import React from 'react';
const LABEL_2719 = 'component_2719';
export function Component2719({ value = 2719, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2719, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2719, 'data-value': derived.doubled }, children);
}
export default Component2719;

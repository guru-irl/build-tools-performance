import React from 'react';
const LABEL_27749 = 'component_27749';
export function Component27749({ value = 27749, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27749, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27749, 'data-value': derived.doubled }, children);
}
export default Component27749;

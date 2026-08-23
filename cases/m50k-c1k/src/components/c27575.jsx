import React from 'react';
const LABEL_27575 = 'component_27575';
export function Component27575({ value = 27575, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27575, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27575, 'data-value': derived.doubled }, children);
}
export default Component27575;

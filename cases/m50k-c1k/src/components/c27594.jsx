import React from 'react';
const LABEL_27594 = 'component_27594';
export function Component27594({ value = 27594, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27594, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27594, 'data-value': derived.doubled }, children);
}
export default Component27594;

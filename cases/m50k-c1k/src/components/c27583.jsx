import React from 'react';
const LABEL_27583 = 'component_27583';
export function Component27583({ value = 27583, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27583, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27583, 'data-value': derived.doubled }, children);
}
export default Component27583;

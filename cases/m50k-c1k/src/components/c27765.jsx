import React from 'react';
const LABEL_27765 = 'component_27765';
export function Component27765({ value = 27765, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27765, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27765, 'data-value': derived.doubled }, children);
}
export default Component27765;

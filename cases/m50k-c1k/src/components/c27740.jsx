import React from 'react';
const LABEL_27740 = 'component_27740';
export function Component27740({ value = 27740, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27740, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27740, 'data-value': derived.doubled }, children);
}
export default Component27740;

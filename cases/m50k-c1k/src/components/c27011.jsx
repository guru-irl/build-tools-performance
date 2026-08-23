import React from 'react';
const LABEL_27011 = 'component_27011';
export function Component27011({ value = 27011, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27011, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27011, 'data-value': derived.doubled }, children);
}
export default Component27011;

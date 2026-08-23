import React from 'react';
const LABEL_27664 = 'component_27664';
export function Component27664({ value = 27664, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27664, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27664, 'data-value': derived.doubled }, children);
}
export default Component27664;

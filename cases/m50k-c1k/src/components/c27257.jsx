import React from 'react';
const LABEL_27257 = 'component_27257';
export function Component27257({ value = 27257, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27257, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27257, 'data-value': derived.doubled }, children);
}
export default Component27257;

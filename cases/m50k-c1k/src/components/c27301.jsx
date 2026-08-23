import React from 'react';
const LABEL_27301 = 'component_27301';
export function Component27301({ value = 27301, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27301, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27301, 'data-value': derived.doubled }, children);
}
export default Component27301;

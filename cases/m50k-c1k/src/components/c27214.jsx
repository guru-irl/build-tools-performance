import React from 'react';
const LABEL_27214 = 'component_27214';
export function Component27214({ value = 27214, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27214, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27214, 'data-value': derived.doubled }, children);
}
export default Component27214;

import React from 'react';
const LABEL_27119 = 'component_27119';
export function Component27119({ value = 27119, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27119, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27119, 'data-value': derived.doubled }, children);
}
export default Component27119;

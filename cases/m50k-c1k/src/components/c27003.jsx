import React from 'react';
const LABEL_27003 = 'component_27003';
export function Component27003({ value = 27003, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27003, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27003, 'data-value': derived.doubled }, children);
}
export default Component27003;

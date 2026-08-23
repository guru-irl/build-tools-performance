import React from 'react';
const LABEL_27358 = 'component_27358';
export function Component27358({ value = 27358, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27358, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27358, 'data-value': derived.doubled }, children);
}
export default Component27358;

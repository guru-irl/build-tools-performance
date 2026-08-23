import React from 'react';
const LABEL_27595 = 'component_27595';
export function Component27595({ value = 27595, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27595, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27595, 'data-value': derived.doubled }, children);
}
export default Component27595;
